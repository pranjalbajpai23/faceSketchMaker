import { useState } from 'react';
import axios from 'axios';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [sendImage, setSendImage] = useState(null)
    const [matchedImages, setMatchedImages] = useState([]);

    const handleFileInputChange = (event) => {
        setSendImage(event.target.files[0]);
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        console.log(selectedFile);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('sketch', sendImage);

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
    const pushNotification = async () => {
        const response = await fetch('http://localhost:3500/notify', {
            method: 'POST',
            body: new URLSearchParams({
                name: matchedImages[0].match(/([^\\]+)(?=\.\w+$)/)[0],
                pic: matchedImages[0]
            })
        })
        const data = await response.json();
        if (response.ok) {
            console.log(data)
        }
        else {
            console.log(data)
        }

    }
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col  items-center'>
                <input className='border-black border-2  rounded-md mb-4' type="file" onChange={handleFileInputChange} />
                <button className='border-black border-2 p-2 rounded-md' onClick={handleUpload}>Upload</button>
            </div>

            <div className='flex justify-evenly mt-4'>
                <div>
                    <img src={selectedFile} style={{ width: "20vw" }} alt="" />
                    <p className='text-center'>Uploaded Sketch</p>
                </div>
                <div style={{ backgroundColor: "black", width: "1vh" }} />
                <div>
                    {matchedImages.map((matchedImage, index) => (
                        <div key={index}>

                            <img src={matchedImage} alt={`Matched image for ${matchedImage}`} style={{ width: "20vw" }} />
                            <p className='text-center'>Matched Image</p>
                            <p className='text-center'>Person Name: {matchedImage.match(/([^\\]+)(?=\.\w+$)/)[0]}</p>
                            <p className='text-center'>Matched %: 90%</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className='border-2 border-black p-2 m-2 rounded-md hover:text-white hover:bg-black' onClick={pushNotification}>Push Notification</button>
        </div>
    );
}

export default App;
