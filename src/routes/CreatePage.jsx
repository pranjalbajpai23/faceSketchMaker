import FFoptions from "../components/FFoptions";
import Dropboard from "../components/Dropboard";
import { useRef } from "react";

const CreatePage = () => {

    const dropboardRef = useRef(null);

    const handlePrint = () => {
        if (dropboardRef.current && dropboardRef.current.downloadScreenshot) {
            dropboardRef.current.downloadScreenshot();
        }
    };
    return (
        <>
            <div className="bg-slate-800 flex flex-wrap justify-center p-2">
                <FFoptions />
                <Dropboard exposedRef={dropboardRef} />
                <button className="btn" style={{ backgroundColor: "white", marginTop: "10px" }}
                    onClick={handlePrint}
                >
                    Print
                </button>
            </div>
        </>
    );
};

export default CreatePage;