import FFoptions from "../components/FFoptions";
import Dropboard from "../components/Dropboard";
import { useRef } from "react";

const Mainpage = () => {
    const container = {
        display: "flex",
        padding: "20px",
        backgroundColor: "RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    };


    const dropboardRef = useRef(null);

    const handlePrint = () => {
        if (dropboardRef.current && dropboardRef.current.downloadScreenshot) {
            dropboardRef.current.downloadScreenshot();
        }
    };
    return (
        <>
            <div style={container}>
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

export default Mainpage;