import React from 'react'
import classes from "./Customer_dash.module.css"
import { NavLink } from 'react-router-dom'

const dashdata = [
    { id: 0, title: 'Personal Information',link: '/a'},
    { id: 1, title: 'Address Book',link: '/b'},
    { id: 2, title: 'Password Reset', link: '/c'},
    { id: 3, title: 'Order List', link: '/d'},
  ]
function Customer_dash() {
    return (
        <div className={classes.customer_background}>
            <div className={classes.menu}> 
            {dashdata.map(data => ( 
                 <NavLink className={classes.dash_menu} activeClassName={classes.visited_dash_menu} to={data.link} >{data.title}</NavLink>   
                ))}    
            </div>                    
        </div>
    )
}

export default Customer_dash
