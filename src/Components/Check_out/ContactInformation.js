import React from 'react'
import classes from "./Checkout.module.css"

function ContactInformation() {
   return (
      <div className={classes.contactinfo}>
         <div className={classes.information}>
            <p className={classes.contact_title}>Contact Information</p>
            <div className={classes.contact_details}>
               <div className={classes.contact_number}>
                  <p className={classes.contact}>Contact Number <span style={{ marginLeft: "5px" }}>*</span></p>
                  <input type="text" />
               </div>
               <div className={classes.email_address}>
                  <p className={classes.contact}>Email Address</p>
                  <input type="text" />
               </div>
            </div>
            <div className={classes.contact_details}>
               <div className={classes.contact_number}>
                  <p className={classes.contact}>Password <span style={{ marginLeft: "5px" }}> *</span></p>
                  <input type="text" />
               </div>
               <div className={classes.email_address}>
                  <p className={classes.contact}>Confirm Password <span style={{ marginLeft: "5px" }}> *</span></p>
                  <input type="text" />
               </div>
            </div>
         </div>
      </div >
   )
}

export default ContactInformation
