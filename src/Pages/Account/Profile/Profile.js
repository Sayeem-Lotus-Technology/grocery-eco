import React, { useState } from "react";
import classes from "./Profile.module.css";
import profileIcon from "./../../../Asset/profile.png";
import menuIcon from "./../../../Asset/menu.png";
import settingIcon from "../../../Asset/setting.png";
import singOutIcon from "../../../Asset/singout.png";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/button";

function Profile(props) {
  const [user, setUser]=useState(true)
 
    window.addEventListener('click', (e) => {
        if ( !document.getElementById('topNav').contains(e.target)) {
            props.setProfileShow(false)
        }
    });

  if(!user){
   return (
      <div className={classes.register} id="profileContainer">
        <p>Nectar Groceries</p>
        <Link to="/account/login" onClick={()=>props.setProfileShow(false)} className={classes.list}>
         Sing In
        </Link>
        <Link to="" onClick={()=>props.setProfileShow(false)} className={classes.list}>
          My Wish List (0)
        </Link>

        <Link to="/account/signup" onClick={()=>props.setProfileShow(false)}>
          <Button  title="Create an Account" styles={{fontSize: "15px", marginTop: "20px", height: "40px"}} />
        </Link>

      </div>
   )

    }
  else{
    return (
      <div className={classes.profile_container} id="profileContainer">
      
        <div className={classes.profile_details}>
          <h1>Nick Robinson</h1>
          <p>mail.zahidhossain@gmail.com</p>
        </div>

        <Link to="/customer/dashboard" onClick={()=>props.setProfileShow(false)} className={classes.profile}>
          <img src={profileIcon} alt="" />
          <h1>Profile</h1>
        </Link>

        <div className={classes.profile}>
            <img src={menuIcon} alt="menu" />
          <h1>Order History</h1>
        </div>

        <div className={classes.profile}>
          <img src={settingIcon} alt="setting" />
          <h1>Setting</h1>
        </div>

        <div className="d-flex justify-content-center">
            <button className={classes.logOut_btn}>
              <img src={singOutIcon} alt="singout" />
              <p>Log out</p>
            </button>
        </div>
      </div>
    );
  }

 }
  

export default Profile;
