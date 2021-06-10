import classes from "./ProductSlide.module.css"
import Pulses from "../../../Asset/pulses.png";
function ProductSlide() {

    const singleSlide=<div className={classes.product}>
            <img src={Pulses} alt="pulses" />
            <h1>Pulses</h1>
        </div>

    return (

        <div className={classes.slideContainer}>
                        <div className={classes.slide}>
                            {singleSlide}
                        </div>
                        <div className={classes.slide}>
                           {singleSlide}
                        </div> 
                        <div className={classes.slide}>
                        {singleSlide}
                        </div>     
                    </div> 
    );
}
export default ProductSlide