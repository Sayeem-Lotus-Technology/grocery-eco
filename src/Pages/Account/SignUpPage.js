import "./account.css"
import Button from "../../Components/Button/button"
import Input from "../../Components/Input/input"
import { Link, useHistory } from "react-router-dom"


const SignUpPage = () => {
    const history=useHistory()
    return (
        <div className="accountPage" style={{ height: "150vh" }}>
            <div className="signUpView">
                <p className="title">Create Account</p>
                <p className="subTitle">if you haven't an account signin with your phone number</p>
                <div className="wrapper ">
                    <div className="row">
                        <div className="col-6">
                            <Input placeholder="First Name" type="text" label="First Name" />
                        </div>
                        <div className="col-6">
                            <Input placeholder="Last Name " type="text" label="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="wrapper"> <Input placeholder="Type Your Phone Number " type="text" label="Phone Number" /></div>
                <div className="wrapper"> <Input placeholder="Type Your Address " type="text" label="Address" /></div>
                <div className="wrapper"> <Input placeholder="Type Password " type="password" label="Password" /></div>
                <div className="wrapper"> <Input placeholder="Confirm Password " type="password" label="Confirm Password" /></div>
                <div className="checkBoxContainer"><input type="checkbox" /><p>I agree the <span> terms & conditions</span></p></div>

                <Button title="Sign Up" styles={{ height: "36px", fontSize: "16px" }} />

                  <p onClick={()=>history.push("/account/login")} className="register">Already have an account?<span>Login</span> </p>
            </div>


        </div>
    );
}

export default SignUpPage;