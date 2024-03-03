import { Link } from "react-router-dom";

const LandingPage = () => {
    return <>
        <div className='flex p-4 items-center'>
            <div className="">
                <h1 className="text-3xl font-semibold" >Create forensic sketch <br /> in a minute like 🫰</h1>
                <p className="font-medium" >Effortlessly create intricate face sketches through our intuitive drag-and-drop interface, streamlining the process for artists at any level, simplifying intricate designs with easy manipulation and precision.</p>
                <div className=" border-4 rounded-md w-fit border-black">
                    <Link to="/create" type="button" className="p-2  hover:bg-sky-700 text-black hover:text-white">Lets get started</Link>
                </div>
            </div>
            <div className="">
                <img src="bg.png" className="" alt="Bootstrap Themes" loading="lazy" />
            </div>
        </div>
    </>
}
export default LandingPage;