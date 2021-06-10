import React from 'react'
import classes from "./WithSearch.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import User from '../../../Asset/user.png'
import { Link } from 'react-router-dom'
import Searchbar from '../../SearchBar/Searchbar'

function TopNavWithSearch() {
    return (
        <div className={classes.topnav}>
            <div className="container custom-container">
                <div className="row ">
                    <div className= {classes.navbar+ " col-12 d-flex align-items-center "}>
                        <button className={classes.drawer_btn}>
                            <img className='img-fluid' src={Drawer} alt="Drawer"/>
                        </button>
                        <div className={classes.search_bar}>
                            <Searchbar />
                        </div>
                        <Link  to='/'>
                            <img className={classes.logo+ ' img-fluid'} src={Logo} alt="logo"/>
                        </Link>
                      
                        <div className='ms-auto'>
                            <Link  to='/' className={classes.user_log}>
                                <img className={classes.user+ ' img-fuid'} src={User} alt="user"/>
                                <p>Account</p>
                            </Link>
                        </div>         
                    </div> 
                </div>    
            </div>   
        </div>
    )
}

export default TopNavWithSearch
