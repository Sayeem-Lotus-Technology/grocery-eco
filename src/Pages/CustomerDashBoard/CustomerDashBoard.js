import { useState } from "react"
import customerImg from "./Asset/customer.png"
import "./customerDashBoard.css"
import RenderPage from "./SubPages/RenderPage"

const CustomerDashBoard = () => {
    const [activeItem, setActiveItem] = useState(0)
    const customer = {
        id: 1,
        img: customerImg,
        name: " Mariya Klakar",
        join: "Member Since 2021"
    }

    const lists = [
        { id: 1, title: "Edit Account", }, { id: 2, title: "Change Pasword" },
        { id: 3, title: "Shipping Address" }, 
        { id: 4, title: "Payment Status" }, { id: 5, title: "Logout" }
    ]

    return (
        <div className="customerDashBoard">

            <div className="container-fluid">
                <div className="dashboardContainer">
                    <div className="dashboardSidebar">
                        <div className="wrapper">
                            <div className="imgWrapper">
                                <img src={customer.img} alt="" />
                                <p className="title">
                                    {customer.name}
                                </p>
                                <p className="subTitle">
                                    {customer.join}
                                </p>
                            </div>
                            <div className="listWrapper">
                                {lists?.map((item) => (
                                    <div onClick={() => setActiveItem(item.id)} className={item.id === activeItem ? "listItem active" : "listItem"}>
                                        <li>{item.title}</li>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="dashboardContent">
                        <RenderPage id={activeItem} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CustomerDashBoard;