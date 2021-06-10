import React from 'react'
import ListTable from './ListTable'
import classes from "./Customer_dash.module.css"
function OrderList() {
    return (
        <>
        <div>
            <p className={classes.dash_title}>Order List</p>
            <hr />
            <div className="pt-4">
                <ListTable />
            </div>
        </div>
        </>
    )
}

export default OrderList
