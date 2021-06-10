
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../Components/Footer/footer";
import TopNavWithoutSearch from "../Components/Navbar/TopNavWithoutSearch/TopNavWithoutSearch";
import SideNav from "../Components/SideNav/SideNav";
import LoginPage from "../Pages/Account/LoginPage";
import SignUpPage from "../Pages/Account/SignUpPage";
import CustomerDashBoard from "../Pages/CustomerDashBoard/CustomerDashBoard";
import HomePage from "../Pages/Home/HomePage";
import OrderHistoryPage from "../Pages/OrderHistory/OrderHistoryPage";
import ProductAll from "../Pages/ProductAll/productAll";
import ProductView from "../Pages/ProductView/productView";
import Profile from "./../Pages/Account/Profile/Profile"
import classes from "./Layout.module.css"

function Layout() {
    const [sideBarOn,setSidebarOn]=useState(false)
    return ( 
        <>
            <div className={classes.topbar}>
                <TopNavWithoutSearch sidebarFun={()=>setSidebarOn(!sideBarOn)} />
            </div>
            <div className="container-fluid">
                <div className={classes.customBody}>
                    <div className={classes.sidebarStyle +" "+ (sideBarOn? classes.showSidebar: classes.hideSidebar)}>
                        <SideNav />
                    </div>
                    <div  className={sideBarOn?classes.push:classes.mainScreen}>
                    <Switch >  
                        <Route exact path='/'><HomePage /></Route>
                        <Route exact path='/profile'><Profile/></Route>
                        <Route path='/product/all'><ProductAll/></Route>  
                        <Route path='/productview'><ProductView /> </Route>
                        <Route path="/customer/dashboard/"><CustomerDashBoard/> </Route> 
                        <Route path="/account/login" ><LoginPage/></Route>
                        <Route path="/account/signup"><SignUpPage/> </Route>
                        <Route path="/orderHistory"><OrderHistoryPage/> </Route>

                        <Route path='/'> </Route>
                        <Redirect to="/"/>
                    </Switch>
                    <Footer />
                </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Layout;