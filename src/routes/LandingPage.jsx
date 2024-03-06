import { Link } from "react-router-dom";

const LandingPage = () => {
    return <>
        <div className='flex p-4 items-center bg-gray-300 h-dvh'>
            <div className="">
                <h1 className="text-3xl font-semibold">Create Forensic Sketch with Ease</h1> <br></br>
                <p className="font-normal text-base" >Get a simple and convenient method to create face sketches using our intuitive drag-and-drop interface.These sketches can then be compared with images in the criminal database to speed up investigations.</p>
                <br></br>
                <Link to="/create" type="button" className="py-2 px-4 bg-blue-700 w-fit rounded-md text-white hover:bg-blue-600">Get Started</Link>
            </div>
            <div className="">
                <img src="bg.png" className="" alt="Bootstrap Themes" loading="lazy" />
            </div>
        </div>
    </>
}
export default LandingPage;