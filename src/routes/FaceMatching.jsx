import { useState } from 'react';
import axios from 'axios';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [matchedImages, setMatchedImages] = useState([]);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    
    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('sketch', selectedFile);

            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            setMatchedImages(response.data.matched_images);
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileInputChange} />
            <button onClick={handleUpload}>Upload</button>

            <div>
                {matchedImages.map((matchedImage, index) => (
                    <div key={index}>
                        <p>Person Name: {matchedImage}</p>
                        <img src={matchedImage} alt={`Matched image for ${matchedImage}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
