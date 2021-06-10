import React from 'react'
import classes from "./Customer_dash.module.css"

const editpassword = [
    { id: 0, title: 'Old Password',placeholder: 'Old Password'},
    { id: 1, title: 'New Password',placeholder:'New Password'  },
    { id: 2, title: 'Confirmed Password', placeholder:'confirmed Password'}, 
  ]
function Password_edit() {
    
    return (
        <>
            <p className={classes.dash_title}>Password Edit</p>
            <hr />
            <div >{editpassword.map(data => (    
                <div className={classes.input_field}  key={data.id}>
                    <p className={classes.dash_input_title}>{data.title} <span className={classes.star}> *</span></p>
                    <input type="password" placeholder={data.placeholder}>
                    </input>
                    <span></span>
                </div> 
                ))}    
                <div className={classes.input_field}>
                    <button type="button">Update</button>
                </div>
            </div>      
     </>
    )
}

export default Password_edit
