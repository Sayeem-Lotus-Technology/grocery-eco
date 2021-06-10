import { useHistory } from "react-router"
import Button from "../../Components/Button/button"
import Input from "../../Components/Input/input"
import "./account.css"

const LoginPage = () => {
    const history=useHistory()
    return (
        <div className="accountPage">
            <div className="loginView">
                <p className="title">Registered Customers</p>
                <p className="subTitle">if you have an account signin with your phone number</p>

                <div className="wrapper"> <Input placeholder="Type Your Phone Number " type="text" label="Phone Number" /></div>
                <div className="wrapper"> <Input placeholder="Type Password " type="text" label="Phone Number" /></div>
                <p className="forgetPassword">Forgot Password?</p>
                <Button title="Log In" styles={{ height: "36px", fontSize: "16px" }} />

                <p onClick={()=>history.push("/account/signup")} className="register">Don't have an account?<span>Register</span> </p>
            </div>


        </div>
    );
}

export default LoginPage;