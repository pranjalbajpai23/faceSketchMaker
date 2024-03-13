import { Link } from "react-router-dom";
const Community=()=>{
    return<>
    <div className='flex flex-col items-center h-full  bg-gray-200' >
      <h1 className="text-2xl font-serif mt-40">Discussion Forum</h1>
      <br></br>
      <Link to="https://t.me/+ukSZyyRReno0NjBl" type="button" className="py-2 px-4 bg-blue-600 w-fit rounded-md text-white hover:bg-blue-400 mt-2">Join our Telegram Channel</Link>
    </div>
    </>
}
export default Community;