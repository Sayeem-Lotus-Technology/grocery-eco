import React from 'react'
import classes from "./searchbar.module.css"
import Icon from "../../Asset/search-icon.png"
function Searchbar() {
    return (
        <div className={classes.search_bar}>
            <input type="text" placeholder="Search"/>
            <button className={classes.search_btn}>
                <img className={classes.search} src={Icon} alt="search"/>
            </button>
        </div>
    )
}

export default Searchbar
