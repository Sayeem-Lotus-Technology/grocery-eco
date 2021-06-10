import { useState } from "react";
import Button from "../../../Components/Button/button";
import Input from "../../../Components/Input/input";
import resetImg from "./asset/reset.png"
import "./passwordReset.css"
const PasswordReset = () => {
    const [page, setPage] = useState(0)
    const icon = <i style={{ color: "white" }} class="fas fa-chevron-right"></i>
    console.log("sjddddddddd", page);
    let element;
    switch (page) {
        case 1:
            element = (
                <div>
                    <p className="subTitle">
                        We have sent an email with pass reset code to <span>ma***************@gmail.com</span>. Please enter it below
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="flex-fill">
                            <Input type="border" placeholder="Code" />
                        </div>

                        <Button onClicked={() => setPage(2)} icon={icon} styles={{ marginLeft: "10px", width: "50px", height: "35px" }} />
                    </div>

                </div>


            );
            break;
        case 2:
            element = (

                <div>
                    <p className="subTitle">
                        Create new password that has at least 8 charecters long
                    </p>

                    <div className="inputWrapper">
                        <Input label="Password" type="border" placeholder="Type Password" />
                    </div>
                    <div className="inputWrapper">
                        <Input label="Confirmed Password" type="border" placeholder="Confirmed Password" />

                    </div>
                    <Button title="Reset Password" styles={{ height: "35px", fontSize: "16px" }} />

                </div>


            );
            break;



        default:
            element = (
                <div className="content">
                    <p className="subTitle">
                        Enter your email address associate with your account and we will send an <span>OTP</span> to reset your password
                    </p>

                    <div className="d-flex align-items-center">
                        <div className="flex-fill">
                            <Input type="border" placeholder="Code" />
                        </div>

                        <Button onClicked={() => setPage(1)} icon={icon} styles={{ marginLeft: "10px", width: "50px", height: "35px" }} />
                    </div>

                </div>
            );
    }
    return (
        <div className="passwordReset">

            <div className="resetContainer">
                <img src={resetImg} alt="" />
                <p className="title">Reset Password</p>
                {element}
            </div>
        </div>
    );
}

export default PasswordReset;