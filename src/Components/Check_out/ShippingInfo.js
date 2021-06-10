import React, {useState} from 'react'
import classes from './Checkout.module.css'
import Edit from "../../Asset/small_edit.png"
import Plus from "../../Asset/plus.png"
import Shipping_address from './ShippingAddress';
import Cross from "../../Asset/cross.png"
function ShippingInfo() {
    const [address, setAddaddress] = useState(false);
    return (
        <div className={`p-4 ${classes.shipping}`}>
            <p className={classes.shipping_title}>Shipping Address</p>
            <div className={`pt-4 ${classes.shipping_div}`}>
                <div className={` ${classes.address}`} >
                    <div className={` ${classes.existing_address}`} >
                        <div className={classes.address_details}>
                            <p className={classes.address_name}>Md. Zahid Hossain</p>
                            <p className={classes.address_number}>01782347942 </p>
                            <p className={classes.address_address}>Floor no 08, House No #20,<br/> Rode no #18 Nikunja 2,<br/> Khilkhet,  Dhaka North </p>
                        </div>

                        <div className={classes.edit}>
                            <button className={classes.edit_btn}>
                                Edit
                                <img src={Edit} alt='edit'/>
                            </button>    
                        </div>
                    </div>
                    <div >
                        <label className={classes.container}>
                            <input  type="checkbox"/>
                            <span className={classes.checkmark}></span>
                        </label>
                    </div>
                    
                </div>     
                <button  onClick={()=>setAddaddress(!address)} className={classes.add}>
                    <img src={Plus} alt='plus'/>
                    Add Address
                </button>
            </div>
            <div>
            {
                address?( 
                    <div className={classes.address_modal_blur} >
                        <div className={classes.address_modal} >
                            <div className={classes.image_btn}>
                                <button onClick={()=>setAddaddress(!address)} className={classes.image}>
                                <img src={Cross} alt="cross" />
                                </button>
                            </div>
                            <Shipping_address />
                            <div className={classes.add_btn} >
                                <button onClick={()=>setAddaddress(!address)}>Add</button>
                            </div>
                        </div>
                    </div>
                ):(null)
            }
            </div>
        </div>
    )
}

export default ShippingInfo
