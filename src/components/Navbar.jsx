import { NavLink } from "react-router-dom";


const Navbar = () => {


    const pages = [
        {
            text: "Home",
            route: '/home'
        },
        {
            text: "Create a Sketch",
            route: "/create"
        },
        {
            text: "Compare",
            route: "/match"
        },
        {
            text: "Community",
            route: "/community"
        },
        {
            text: "About",
            route: "/about",
        }
        
    ]
    

    return <>
        <div className="flex text-black justify-between p-2 bg-gray-300" >
            <NavLink to='/'>
                <img src="./logoDark.svg" className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" alt="" />
            </NavLink>
            <ul className="text-black flex py-2 ">
                {
                    pages.map(item => (

                        <li key={item.text}><NavLink to={item.route} className="nav-NavLink px-4 text-black hover:underline">{item.text}</NavLink></li>
                    ))
                }
            </ul>
            <div className="">
                <button type="button" className="py-2 px-4 mr-4 bg-blue-700 text-white hover:bg-blue-600">Login</button>
                
                <button type="button" className="py-2 px-4 mr-4 bg-blue-700 text-white hover:bg-blue-600">Sign Up</button>
            </div>

        </div>
    </>
}

export default Navbar;

