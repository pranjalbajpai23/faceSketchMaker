/* eslint-disable react/prop-types */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../store/authSlice";

const SignIn = ({ setNewUser }) => {

    const dispatch = useDispatch();
    const usrNameRef = useRef();
    const errorRef = useRef();

    const [usrName, setUsrName] = useState("");
    const [pwd, setPwd] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        usrNameRef.current.focus();
    }, [])
    useEffect(() => {
        setErr("");
    }, [usrName, pwd])

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, usrName, pwd)
            .then((userCredential) => {
                console.log(userCredential.user.email);
                dispatch(authAction.setLogin({ name: userCredential.user.email, login: true }));
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return <>
        <div className="flex flex-col w-fit text-3xl  border-2 border-black p-8 rounded-md">
            <span className="text-center">Login</span>
            <span ref={errorRef} className={err ? "err text-red-600 text-sm text-center" : "offscreen"} aria-live="assertive">{err}</span>
            <form className="flex flex-col text-lg" onSubmit={signIn}>
                <label htmlFor="username">Username</label>
                <input ref={usrNameRef} className="border-2 mb-2" type="text" id="username" onChange={(e) => setUsrName(e.target.value)} required />
                <label htmlFor="pasword" type="password" >Password</label>
                <input className="border-2 mb-2" type="password" id="password" onChange={(e) => setPwd(e.target.value)} />
                <button
                    className="bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black  p-2 px-4 rounded-md align-center mb-2"
                >Login</button>
            </form>
            <Link className="text-sm text-black hover:border-b-2 border-black w-max" onClick={() => setNewUser(true)} >new user? register from here</Link>
        </div>
    </>
};

export default SignIn;