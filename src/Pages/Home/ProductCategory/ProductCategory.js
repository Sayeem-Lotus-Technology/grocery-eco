import classes from "./ProductCategory.module.css"
import vegetable from "./../../../Asset/vegetable.png"
function ProductCategory() {
    return (
        <div className={classes.category}>
          <img src={vegetable} alt="vegetable"/>
          <h1>Fresh Fruits & Vegetable</h1>
        </div>
      );
}
export default ProductCategory