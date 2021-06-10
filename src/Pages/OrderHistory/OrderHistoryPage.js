
import React from 'react'
import OrderDetails from '../../Components/OrderHistory/OrderDetails'
import OrderHistory from '../../Components/OrderHistory/OrderHistory'
import OrderStatus from '../../Components/OrderHistory/OrderStatus'
import classes from "./OrderHistory.module.css"

function OrderHistoryPage() {
    return (
        <div className="mb-5 pt-2" >
            <div className={classes.order_status +" justify-content-center col-lg-12 col-md-12 col-sm-12"}>
               <OrderStatus />
            </div>
            
            <div className={classes.order_details + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <OrderDetails />
            </div>
            
            <div className={classes.order_history + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <div >
                    <OrderHistory />
                </div>
                <div className='pt-3'>
                    <OrderHistory />
                    
                </div>
                <div className='pt-3 pb-3'>
                    <OrderHistory />
                </div>  
            </div>     
        </div>
    )
}

export default OrderHistoryPage
