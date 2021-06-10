
import React from 'react'
import classes from "./Customer_dash.module.css"
import AllStatus from './img/btn.png'
const listdata = [
    { id: 0, orderno: 'B-556-098',payment:'Cash On Delivery', total:'$780.00',date:'08-02-2021', status:'Canceled' , background:'#F96E6F' },
    { id: 1, orderno: 'B-556-099',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Processing' , background:'#FFAB00' },
    { id: 2, orderno: 'B-556-100',payment:'Cash On Delivery', total:'$780.00',date:'08-02-2021', status:'Delivery' , background:'#099749' },
    { id: 3, orderno: 'B-556-101',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Pending' , background:'#A7C3FF' },
    { id: 4, orderno: 'B-556-099',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Processing' , background:'#FFAB00' },
  ]
function ListTable() {
    return (
        <> 
            <div className={classes.table_info}>
                <div className={classes.all_orders}>
                    <div >
                        <p className={classes.lalest_order}>Latest Order</p>
                        <p className={classes.history}>Your Order History</p>
                    </div>
                    <button className={classes.all_status_btn}>
                        <img src={AllStatus} alt='all status'/>
                         All Status
                    </button>
                </div>
                <table className={classes.listtable}>
                <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Total</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                </tr>
                {listdata.map(data => (
                    <tr  key={data.id}>
                     <td className={classes.table_data} >{data.orderno}</td>
                     <td className={classes.table_data}>{data.payment}</td>
                     <td className={classes.table_data}>{data.total}</td>
                     <td className={classes.table_date}>{data.date}</td>
                     <td>
                         <div className={classes.status} style={{background:data.background}} >{data.status}</div>
                     </td>
                 </tr>
                  
                ))} 
                </table>
            </div>
            
        </>
    )
}

export default ListTable
