import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


    const pages = [
        {
            text: "Home",
            route: '/home'
        },
        {
            text: "Create Sketch",
            route: "/create"
        },
        {
            text: "Face Matching",
            route: "/match"
        },
        {
            text: "community",
            route: "/community"
        },
        {
            text: "About",
            route: "/about",
        }
        
    ]
    

    return <>
        <div className="flex text-black justify-between p-2" >
            <Link to='/'>
                <img src="./logoDark.svg" className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" alt="" />
            </Link>
            <ul className="text-black flex">
                {
                    pages.map(item => (

                        <li key={item.text}><NavLink to={item.route} className="nav-NavLink px-2 text-black" style={({ isActive }) => (isActive ? { backgroundColor: "#0d6efd", color: "white" } : {})}>{item.text}</NavLink></li>
                    ))
                }
            </ul>
            <div className="">
                <button type="button" className="px-2">Login</button>
                <button type="button" className="px-2">Sign-up</button>
            </div>

        </div>
    </>
}

export default Navbar;

