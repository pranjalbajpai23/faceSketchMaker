import FFoptions from "../components/FFoptions";
import Dropboard from "../components/Dropboard";
import { useRef, useState } from "react";

const CreatePage = () => {

    const dropboardRef = useRef(null);
    const [clear, setClear] = useState(false)
    const handlePrint = () => {
        if (dropboardRef.current && dropboardRef.current.downloadScreenshot) {
            dropboardRef.current.downloadScreenshot();
        }
    };
    const clearBoard = () => {
        setClear(true)
    }
    return (
        <>
            <div className="bg-slate-800 flex flex-wrap justify-center p-2">
                <FFoptions />
                <Dropboard exposedRef={dropboardRef} clear={clear} setClear={setClear} />
                <button className="btn mx-2" style={{ backgroundColor: "white", marginTop: "10px" }}
                    onClick={handlePrint}
                >
                    Print
                </button>
                <button className="btn mx-2" style={{ backgroundColor: "white", marginTop: "10px" }}
                    // add a function for reseting dropboard
                    onClick={clearBoard}
                >
                    Reset
                </button>
                
            </div>
        </>
    );
};

export default CreatePage;