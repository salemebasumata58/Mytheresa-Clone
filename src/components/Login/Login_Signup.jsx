import "./Login_Signup.css"
import { Signin } from "./Signin";
import { SignUp } from "./SignUp";
export const Login_Signup = () => {
    return <div className="Auth">
        <div><SignUp /></div>
        <div className="line"></div>
        <div><Signin /></div>
    </div>
}