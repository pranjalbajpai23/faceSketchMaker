import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authAction } from "../store/authSlice";


const Navbar = () => {

    const auth = useSelector(state => state.auth);
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pages = [
        {
            text: "Home",
            route: '/'
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
        },


    ]
    console.log(auth);
    useEffect(() => {
        const tempName = auth.name.split("@")[0];
        setName(tempName);
    }, [auth])

    const Logout = () => {
        dispatch(authAction.setLogout());
    }
    return <>
        <div className="flex text-black justify-between p-2 bg-white-200" >
            <NavLink to='/'>
                <img src="./logoDark.svg" className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" alt="" />
            </NavLink>
            <ul className="text-black flex py-2 ">
                {
                    pages.map(item => (

                        <li key={item.text}><NavLink to={item.route} className="nav-NavLink  mx-4 text-black font-bold hover:border-b-2 border-black"
                            style={({ isActive }) => (isActive ? { borderBottom: "2px solid black" } : {})} >{item.text}</NavLink></li>
                    ))
                }
            </ul>
            <div className="">
                {
                    auth.login == true ?
                        <div className="flex items-center">
                            <span>{name}</span>
                            <img src="person.svg" className="w-8 h-8 mx-2" />
                            <Link type="button" className="py-2 px-4 mr-4 rounded-md bg-blue-700 text-white hover:bg-blue-600 " onClick={Logout}>Logout</Link>
                        </div>
                        :
                        <Link to='/Login' type="button" className="py-2 px-4 mr-4 rounded-md bg-blue-700 text-white hover:bg-blue-600 ">Login</Link>
                }
            </div>

        </div>
    </>
}

export default Navbar;

