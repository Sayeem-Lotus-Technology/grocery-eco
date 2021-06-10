import React from 'react'
import classes from "./Checkout.module.css"
import Visa from "../../Asset/visa.png"
import American from "../../Asset/american.png"
import Mastercard from "../../Asset/mastercard.png"
function PaymentMethod() {
   return (   
         <div className={classes.payment_info}>
            <p className={classes.method_title} >Payment Method</p>
               <label className={classes.cash_one} activeClassName={classes.visited}>
                  <input type="radio" id="cash" name="payment" value="cash" />
                  <span className='pl-3'>
                     <p className={classes.debit}>Credit/Debit Card</p>
                     <p className={classes.time}>Processing time 2-4 hours</p>
                  </span>
                  <span className='pl-3' > <img className={classes.method} src={Mastercard} alt='mastercard' /></span>
                  <span className='pl-3' > <img className={classes.method} src={Visa} alt='visa' /></span>
                  <span className='pl-3' > <img className={classes.method} src={American} alt='amrerican' /> </span>
               </label>
               <label className={classes.cash_two} activeClassName={classes.visited}>
                  <input type="radio" id="cash" name="payment" value="cash" />
                  <span ><p className={classes.cash_on}>Cash On Delivery</p></span>
               </label>
               <label className={classes.cash_two} activeClassName={classes.visited}>
                  <input type="radio" id="cash" name="payment" value="cash" />
                  <span ><p className={classes.cash_on}>Bkash</p></span>
               </label>
               <label className={classes.cash_two} activeClassName={classes.visited}>
                  <input type="radio" id="cash" name="payment" value="cash" />
                  <span ><p className={classes.cash_on}>Nagad</p></span>
               </label>
               <label className={classes.cash_two} activeClassName={classes.visited}>
                  <input type="radio" id="cash" name="payment" value="cash" />
                  <span ><p className={classes.cash_on}>Rocket</p></span>
               </label>
         </div>
   )
}

export default PaymentMethod
