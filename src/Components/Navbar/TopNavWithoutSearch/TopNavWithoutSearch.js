import React, { useState } from 'react'
import classes from "./WithoutSearch.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import User from '../../../Asset/user.png'
import { Link } from 'react-router-dom'
import Profile from '../../../Pages/Account/Profile/Profile'


function TopNavWithoutSearch(props) {
    const [profileShow, setProfileShow]=useState(false)
    return (
        <div className={classes.topnav} id="topNav">
            <div className="container-fluid">
                <div className="row ">
                    <div className= {classes.navbar+ " col-12 d-flex align-items-center justify-content-between"}>
                        <button onClick={props.sidebarFun} className={classes.drawer_btn}>
                            <img className='img-fluid' src={Drawer} alt="Drawer"/>
                        </button> 
                        <Link  to='/'>
                            <img className={classes.logo+ ' img-fluid'} src={Logo} alt="logo"/>
                        </Link>
                        <div onClick={()=>setProfileShow(!profileShow)} className={classes.user_log} >
                            <img className={classes.user+ ' img-fuid'} src={User} alt="user"/>
                            <p>Account</p>
                        </div> 
                        <div className={profileShow?classes.profileModal:"d-none"}>
                            <Profile profileShow={profileShow} setProfileShow={setProfileShow} />
                        </div>        
                    </div> 
                </div>    
            </div>   
        </div>
    )
}

export default TopNavWithoutSearch
