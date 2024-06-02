import FFoptions from "../components/FFoptions";
import Dropboard from "../components/Dropboard";
import { useRef, useState } from "react";

const CreatePage = () => {
  const dropboardRef = useRef(null);
  const [clear, setClear] = useState(false);
  const handlePrint = () => {
    if (dropboardRef.current && dropboardRef.current.downloadScreenshot) {
      dropboardRef.current.downloadScreenshot();
    }
  };
  const clearBoard = () => {
    setClear(true);
  };
  return (
    <>
      <div className="bg-cyan-900 flex flex flex-wrap justify-center p-2">
        <div className="w-full">
          <label for="cars" className="text-white">
            Gender:
          </label>
          <select name="cars" id="cars">
            <option value="volvo">Male</option>
            <option value="saab">Female</option>
          </select>
        </div>
        <FFoptions />
        <Dropboard
          exposedRef={dropboardRef}
          clear={clear}
          setClear={setClear}
        />
        <button
          className="btn mx-2"
          style={{ backgroundColor: "white", marginTop: "10px" }}
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          className="btn mx-2"
          style={{ backgroundColor: "white", marginTop: "10px" }}
          // add a function for resetting dropboard
          onClick={clearBoard}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CreatePage;
