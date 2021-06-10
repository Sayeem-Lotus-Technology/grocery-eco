import React from 'react'
import classes from "./MobileNav.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import Profile from '../../../Asset/mobileProfile.png'
import Search from "../../../Asset/mobile-search.png"
import CartIcon from "../../../Asset/cart.png"
import { Link } from 'react-router-dom'

function MobileNav() {
    return (
        <div className={classes.topnav}>
                <div className="row ">
                    <div className= {classes.navbar+ " col-12 d-flex align-items-center"}>
                        <div className={classes.partOne}>
                            <button className={classes.all_btn}>
                                <img className='img-fluid' src={Drawer} alt="Drawer"/>
                            </button>   
                            <Link  to='/'>
                                <img className={classes.logo+ ' img-fluid'} src={Logo} alt="logo"/>
                            </Link> 
                        </div>

                        <div className={classes.partTwo}>
                            < button className={classes.all_btn }>
                                <img className= "img-fuid" src={Search} alt="search"/>
                            </button>
                            <div className="d-flex">
                                <div className={classes.notification}>
                                    <p >155</p>
                                </div>  
                                <button  className={classes.cart_btn}> 
                                    <img className={classes.user+ " img-fuid"} src={CartIcon} alt="cart-icon"/>
                                </button>
                            </div>
                            
                            <button onClick className={classes.all_btn }>
                                <img className= "img-fuid" src={Profile} alt="profile"/>
                            </button>
                        </div>         
                    </div> 
                </div>    
            </div>   
      
    )
}

export default MobileNav
