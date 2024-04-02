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


            setMatchedImages([])
            console.log(response.data);
            setMatchedImages(response.data);
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };
    const pushNotification = async () => {
        console.log(matchedImages[0])
        const response = await fetch('http://localhost:3500/notify', {
            method: 'POST',
            body: new URLSearchParams({
                name: matchedImages[0].identity,
                pic: matchedImages[0].identity
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

            <div className='flex flex-col items-center justify-evenly mt-4'>
                <div>
                    <img src={selectedFile} style={{ width: "20vw" }} alt="" />
                    <p className='text-center'>Uploaded Sketch</p>
                </div>
                <div className='text-lg font-bold py-4'>
                    Matched Images
                </div>
                <div className='flex '>

                    {
                        matchedImages.length == 0 ?
                            <div>
                                No Image Found
                            </div>


                            :

                            matchedImages.map((item) => (
                                <div key={item.identity} className='px-2'>
                                    <img src={item.identity} alt={`Matched image for ${item}`} style={{ width: "20vw" }} />
                                    <p className='text-left'>Matched Image</p>
                                    <p className='text-left'>Person Name: {item.identity.match(/([^\\]+)(?=\.\w+$)/)[0]}</p>
                                    <p className='text-left'>Matched Percentage: {((1 - item.distance) * 100).toFixed(2)}%</p>
                                </div>
                            ))
                    }

                </div>
            </div>
            <button className='border-2 border-black p-2 m-2 rounded-md hover:text-white hover:bg-black' onClick={pushNotification}>Push Notification</button>
            <div>*Note - Push Notification will send heighest matching image </div>
        </div>
    );
}

export default App;
