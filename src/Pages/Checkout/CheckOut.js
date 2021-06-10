import React from 'react'
import ContactInformation from '../../Components/Check_out/ContactInformation'
import OrderReview from '../../Components/Check_out/OrderReview'
import PaymentMethod from '../../Components/Check_out/PaymentMethod'
import ShippingInfo from '../../Components/Check_out/ShippingInfo'
import BillingSummery from '../../Components/Check_out/BillingSummery'
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
