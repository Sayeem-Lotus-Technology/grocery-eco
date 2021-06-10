import Input from "../../Components/Input/input"
import "./loginPage.css"

const LoginPage = () => {
    return (
        <div className="loginPage">
            <Input placeholder="Type Your Phone Number" label="Phone Number" />
        </div>
    );
}

export default LoginPage;