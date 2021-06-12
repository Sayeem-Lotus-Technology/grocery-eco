import React from 'react'
import ShippingInfo from './SubPage/ShippingInfo'
import PaymentMethod from "./SubPage/PaymentMethod"
import ContactInformation from "./SubPage/ContactInformation"
import OrderReview from "./SubPage/OrderReview"
import BillingSummery from "./SubPage/BillingSummery"
import classes from "./CheckOut.module.css"
function CheckOut() {
    return (
        <div className={classes.checkoutpage}>
            <p className={classes.check_title}>CheckOut</p>
            <div className='row'>
                <div className={classes.left_side+ " justify-content-center col-lg-7 col-md-12 col-sm-12"}>
                     <div>
                        <ShippingInfo  />
                     </div>
                     <div className='pt-4'>
                         <PaymentMethod />
                     </div>
                     <div className='pt-4'>
                         <ContactInformation />
                     </div>
                </div>
                <div className={classes.right_side+ " justify-content-center col-lg-5 col-md-12 col-sm-12"} >
                    <div >
                        <OrderReview />
                     </div>
                     <div className='pt-4'>
                       <BillingSummery />
                     </div>
                </div>
            </div>      
        </div>
    )
}

export default CheckOut
