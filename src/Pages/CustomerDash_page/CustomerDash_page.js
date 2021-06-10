import React from 'react'
import classes from "./CustomerDash.module.css"
import Customer_dash from '../../Components/Customer_dashboard/Customer_dash'
import Personal_info from '../../Components/Customer_dashboard/Personal_info'
import Address_book from '../../Components/Customer_dashboard/Address_book'
import Password_edit from '../../Components/Customer_dashboard/Password_edit'
import OrderList from '../../Components/Customer_dashboard/OrderList'
function CustomerDash_page() {
    return (
        <div className={classes.customerdash} >
            <p className={classes.page_header}> Home<span className={classes.span}> -- </span> My Dashboard</p>
            <div className={`row ${classes.dash}`}>
                <div className={`justify-content-center col-lg-3 col-md-12 col-sm-12 ${classes.dashboard}`}>
                    <Customer_dash />
                </div>  
                <div className={classes.allinfo+ " justify-content-center col-lg-9 col-md-12 col-sm-12"}>
                    {/* <Personal_info  />
                    <Address_book />
                    <Password_edit /> */}
                    <OrderList /> 
                </div>    
            </div>
        </div>
        
    )
}

export default CustomerDash_page
