import React from 'react'
import classes from "./Customer_dash.module.css"

const personalinfo = [
   { id: 0, title: 'Full Name',type:'text',placeholder: 'Your Name',},
   { id: 1, title: 'Date Of Birth',type:'date',placeholder:'DDMMYY'},
   { id: 2, title: 'Mobile Number',type:'text',placeholder:'Your Number'},
   { id: 3, title: 'Email Address',type:'text',placeholder:'Your Email Address'},
 ]
function Personal_info() {
    return (
        <>
        <p className={classes.dash_title}>Personal Information</p>
        <hr />
        <div>
        { personalinfo.map(data=>(
               <div className={classes.input_field}  key={data.id}>
                  <p className={classes.dash_input_title}>{data.title} <span className={classes.star}> *</span></p>
                  <input type={data.type} placeholder={data.placeholder}>
                  </input>
                  <span></span>
                </div>
             ))
             }

           <div className={classes.radio_field}>
              <p className={classes.dash_input_title}>Gender</p>
              <div className={classes.radio_btn}>
                 <label className={classes.male_radio}>
                    <input type="radio" id="male" name="gender" value="male" />
                    <span className='ml-2'>Male</span>
                 </label>
                 <label className={classes.female_radio}>
                    <input type="radio" id="female" name="gender" value="female" checked />
                     <span className='ml-2 '>Female</span>
                 </label>
              </div>
           </div>
           <div className={classes.update_btn}>
              <button type="button">Save</button>
           </div>
        </div>
     </>
    )
}

export default Personal_info
