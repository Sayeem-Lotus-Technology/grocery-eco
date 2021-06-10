import classes from "./ProductSlide.module.css"
import Pulses from "../../../Asset/pulses.png";
function ProductSlide() {

    function SigleSlide(){
        <div className={classes.product}>
            <img src={Pulses} alt="pulses" />
            <h1>Pulses</h1>
        </div>
    }

    return (

        <div className={classes.slideContainer}>
                        <div className={classes.slide}>
                            {SigleSlide}
                        </div> 
                        <div className={classes.slide}>
                            {SigleSlide}
                        </div> 
                        <div className={classes.slide}>
                            {SigleSlide}
                        </div>     
                    </div> 
        
    );


}
export default ProductSlide