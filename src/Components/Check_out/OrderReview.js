
import React,{useState}from 'react'
import classes from "./Checkout.module.css"
import DropArrow from "../../Asset/droparrow.png"
import OrderList from './OrderList'

function OrderReview() {
   const [review, setAddreview] =useState
   (false)
   return (
      <>
         <div className={classes.order_review}>
            <div >
               <p className={classes.order_review_title}>Order review (3)</p>
            </div>
            <div className={classes.order_review_image}>
               <button onClick={()=>setAddreview(!review)} className={classes.order_review_btn}>
                  <img src={DropArrow} alt='dropArrow' />
               </button>
            </div>
         </div>
         <div>
         {
            review?( 
               <div className='pt-3'>
                 <OrderList /> 
               </div>
            ):(null)
         }
         </div>
      </>
   )
}

export default OrderReview
