import React from 'react'
import classes from "./Checkout.module.css"

function ShippingAddress() {
   return (
      <>
         <div className='px-5 pt-3 pb-2'>
            <p className={classes.shipping_info}>Shipping Info</p>
            <div className={classes.customer_name}>
               <div className={classes.first_input} >
                  <input type="text" placeholder="First name" />
               </div>
               <div className={classes.last_input}>
                  <input type="text" placeholder="Last name" />
               </div>
            </div>

            <div className={classes.city_name}>
               <div className={classes.city}>
                  <select>
                     <option className={classes.option}>Select City</option>
                     <option className={classes.option}>Dhaka</option>
                     <option className={classes.option}>Khulna</option>
                  </select>
               </div>
               <div className={classes.area}>
                  <select >
                     <option className={classes.option}>Select Area</option>
                     <option className={classes.option}>Dhaka</option>
                     <option className={classes.option}>Khulna</option>
                  </select>
               </div>
            </div>

            <div className={classes.info}>
               <input type="text" placeholder="Phone number" />
            </div>
            <div className={classes.info}>
               <input type="text" placeholder="Full address" />
            </div>
            <div className={classes.info}>
               <input type="text" placeholder="Your Email" />
            </div>
         </div >
      </>
   )
}

export default ShippingAddress

