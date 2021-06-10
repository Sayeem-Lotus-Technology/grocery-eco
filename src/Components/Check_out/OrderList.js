import React from 'react'
import classes from "./Checkout.module.css"
import ProductImg from "../../Asset/productimg.png"

function OrderList() {
   return (
      <div className={classes.order_info}>
         <div className={classes.order_list}>
            <div className={classes.order_image}>
               <img src={ProductImg} alt="ProductImg" />
            </div>
            <div className={classes.order_item}>
               <p className={classes.order_item_name}>Samsung Galaxy Book Flex 13 (i7/512GB) - Royal Blue</p>
               <p className={classes.order_item_pcs}>1pcs, Price</p>
               <p className={classes.order_item_price}> $23.90</p>
            </div>
         </div>
         <div className={classes.order_list}>
            <div className={classes.order_image}>
               <img src={ProductImg} alt="ProductImg" />
            </div>
            <div className={classes.order_item}>
               <p className={classes.order_item_name}>Samsung Galaxy Book Flex 13 (i7/512GB) - Royal Blue</p>
               <p className={classes.order_item_pcs}>1pcs, Price</p>
               <p className={classes.order_item_price}> $23.90</p>
            </div>
         </div>
         <div className={classes.order_list}>
            <div className={classes.order_image}>
               <img src={ProductImg} alt="ProductImg" />
            </div>
            <div className={classes.order_item}>
               <p className={classes.order_item_name}>Samsung Galaxy Book Flex 13 (i7/512GB) - Royal Blue</p>
               <p className={classes.order_item_pcs}>1pcs, Price</p>
               <p className={classes.order_item_price}> $23.90</p>
            </div>
         </div>
      </div>
   )
}

export default OrderList
