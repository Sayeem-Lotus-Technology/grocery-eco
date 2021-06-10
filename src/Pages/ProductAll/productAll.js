import classes from "./productAll.module.css"
import Cart from "../../Components/Cart/cart"
import SelectedInput from "../../Components/SelectedInput/selectedInput"

const ProductAll = () => {
    const productTypes = ["one", "two", "three"]
    const shipsTypes = ["one", "two", "three"]
    const sortTypes = ["New Arival", "Price Low To Heigh", "Price Heigh To Low", "Discount"]


    // window.addEventListener('click', (e) => {
    //     if (selBox && !document.getElementById('selectedInputContainer').contains(e.target)) {
    //         setSelBox(false)
    //     }
    // });

    return (
        <div className={classes.productAll}>
            <div className={classes.selectFormComponents}>
                <SelectedInput customStyle={{ width: "32%" }} id="selectProduct" type="modal" defaultValue="Select Product Type" options={productTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="shipsForm" type="modal" defaultValue="Ships Form" options={shipsTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="sortBy" type="modal" defaultValue="Sort By" options={sortTypes} />
            </div>

            <div className={classes.displayCart}>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
                <div className={classes.signleCart}>
                    <Cart />
                </div>
            </div>

        </div>

    );
}

export default ProductAll;