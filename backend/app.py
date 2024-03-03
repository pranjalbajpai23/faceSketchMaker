from flask import Flask, request, jsonify
from flask_cors import CORS
from deepface import DeepFace
import os
import tempfile
import numpy as np
import cv2

app = Flask(__name__)
CORS(app)

IMAGE_FOLDER = 'faces'

model_name='ArcFace'

def find_matching_image(input_image, dataset):
    matched_images = []
    
    # Convert bytes to numpy array
    nparr = np.frombuffer(input_image, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # Save the image to a temporary file
    temp_img_path = os.path.join(tempfile.gettempdir(), 'temp_img.jpg')
    cv2.imwrite(temp_img_path, img)
    
    # Perform face recognition
    res = DeepFace.find(img_path=temp_img_path, db_path=dataset, model_name=model_name)
    
    # Extract identities from the result
    identities = []
    for df in res:
        identities.extend(df['identity'])
    
    matched_images.extend(identities)
    
    # Delete the temporary image file
    os.remove(temp_img_path)
    
    return matched_images

@app.route('/upload', methods=['POST'])
def upload_sketch():
    input_image = request.files['sketch'].read()
    matched_images = find_matching_image(input_image, IMAGE_FOLDER)
    return jsonify({'matched_images': matched_images})

if __name__ == '__main__':
    app.run(debug=True)
