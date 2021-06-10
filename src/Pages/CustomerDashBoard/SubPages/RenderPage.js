import OrderHistoryPage from "../../OrderHistory/OrderHistoryPage";
import ChangePassword from "./ChangePassword/changePassword";
import EditAccount from "./EditAccount/EditAccount";
import OrderHistory from "./OrderHistory/OrderHistory";
import ShippingAddress from "./ShippingAddress/ShippingAddress";

const RenderPage = ({ id }) => {
    let render;

    switch (id) {
        case 1:
            render = (
                <EditAccount />
            )
            break;
        case 2:
            render = <ChangePassword />
            break;
        case 3:
            render = <ShippingAddress />
            break;
        default:
            render = <div>Somthing is wrong to render</div>
            break;


    }
    return (
        render
    );
}

export default RenderPage;