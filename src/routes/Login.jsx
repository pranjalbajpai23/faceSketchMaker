import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
const Login = () => {
    const [newUser, setNewUser] = useState(false);

    return <>
        <div className="w-full h-[90vh] flex items-center justify-center">
            {!newUser ?
                <SignIn setNewUser={setNewUser} />
                :
                <SignUp setNewUser={setNewUser} />
            }
        </div>
    </>
}
export default Login;