import React from 'react'
import Edit from './img/edit.jpg'
import Add from './img/add.jpg'
import classes from "./Customer_dash.module.css"
function Address_book() {
    return (
        <div className=" pb-5">
            <p className={classes.dash_title}>Address Book</p>
            <hr />
            <div className={classes.address_detail}>
                <div className={classes.existing_address}>
                    <div className={classes.address_details}>
                        <p className={classes.address_name}>Md. Zahid Hossain</p>
                        <p className={classes.address_number}>01782347942 </p>
                        <p className={classes.address_address}>Floor no 08, House No #20,<br/> Rode no #18 Nikunja 2,<br/> Khilkhet,  Dhaka North </p>
                    </div>
                    <button className={classes.edit_img}> 
                        <img src={Edit} alt='edit'/> 
                    </button>
                </div>
                <button className={classes.new_address}>
                    <img src={Add} alt='add'/> 
                     ADD NEW ADDRESS
                </button>  
            </div>     
        </div>
    )
}

export default Address_book
