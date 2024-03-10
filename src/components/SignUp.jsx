/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { authAction } from "../store/authSlice";
import { useDispatch } from "react-redux";

const SignUp = ({ setNewUser }) => {


    const emailRef = useRef();
    const errorRef = useRef();

    const [email, setemail] = useState("");
    const [pwd, setPwd] = useState("");
    const [err, setErr] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        emailRef.current.focus();
    }, [])
    useEffect(() => {
        setErr("");
    }, [email, pwd])

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                setSuccess(true);
                console.log(userCredential);
                dispatch(authAction.setLogin({ name: userCredential.user.email, login: true }));
                setSuccess(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000)

            })
            .catch((error) => {
                setErr("Invalid email Id or Password");
                console.log(error);
            });
    };
    return <>
        {
            success ?
                <div className="flex flex-col w-fit  text-3xl  border-2 border-black p-8 rounded-md items-center">
                    <span className="text-center" ref={emailRef}>{email} Registered Successfully</span>
                    <img src="success.svg" className="w-28 h-28" alt="" />
                </div >
                :
                <div className="flex flex-col w-fit  text-3xl  border-2 border-black p-8 rounded-md">
                    <span className="text-center">Register</span>
                    <span ref={errorRef} className={err ? "err text-red-600 text-sm text-center" : "offscreen"} aria-live="assertive">{err}</span>
                    <form className="flex flex-col text-lg" onSubmit={signUp}>
                        <label htmlFor="email" ref={emailRef}>Email</label>
                        <input className="border-2 mb-2" type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
                        <label htmlFor="pasword" type="password"  >Create Password</label>
                        <input className="border-2 mb-2" type="password" id="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Should be atleast 6 characters" />
                        <button
                            className="bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black  p-2 px-4 rounded-md align-center mb-2"
                        >Register</button>
                    </form>
                    <Link className="text-sm text-black hover:border-b-2 border-black w-max" onClick={() => setNewUser(false)} >Login into existing account</Link>
                </div >
        }

    </>
};

export default SignUp;