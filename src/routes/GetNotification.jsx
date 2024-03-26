import { useEffect, useState } from "react";

const GetNotification = () => {
    const [criminal, setCriminal] = useState([]);
    useEffect(() => {
        const getPublishedCriminals = async () => {
            const response = await fetch('http://localhost:3500/publish', {
                method: 'GET'
            })
            const data = await response.json();
            if (response.ok) {
                const newList = [...criminal, data]
                setCriminal(newList);
                console.log(data)
            }
            else {
                console.log(data);
            }
        }
        getPublishedCriminals()
        const intervalId = setInterval(getPublishedCriminals, 100000); // 100 seconds

        return () => clearInterval(intervalId);
    }, [])
    return <>
        <div className="flex flex-col items-center">
            <div className="text-xl font-bold">Notification for following criminal have been issued</div>
            {
                criminal.map(item => (
                    <div key={item.name}>

                        <img src={item.pic} alt={`Matched image for ${item.pic}`} style={{ width: "20vw" }} />
                        <p className='text-center'>Matched Image</p>
                        <p className='text-center'>Person Name: {item.name}</p>
                    </div>
                ))
            }
        </div>
    </>
}
export default GetNotification;