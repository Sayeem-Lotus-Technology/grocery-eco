import classes from "./productView.module.css"
import pic01 from "../../Asset/pic01.png"
import pic02 from "../../Asset/pic02.jpg"
import pic03 from "../../Asset/pic03.jpg"
import pic04 from "../../Asset/pic04.jpg"

import SelectedInput from "../../Components/SelectedInput/selectedInput"
import { useState } from "react"
import Button from "../../Components/Button/button"
import Slider from "../../Components/Slider/slider"
import Cart from "../../Components/Cart/cart"

const ProductView = () => {
    const imgList = [pic01, pic02, pic03, pic04, pic01, pic03]
    const product = {
        img: [pic01, pic01, pic01, pic01, pic01, pic01],
        title: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
        brand: "Springs shoes mens sneakers",
        discount: 50,
        price: 2000,
        delevery_cost: 100,
    }
    const options = ["330gm", "440gm", "500gm"]
    const [quantity, updateQuantity] = useState(1)
    const [activeImg, setActiveImg] = useState(product.img[0])
    const slideDisplay = 3

    return (
        <div className={classes.productView}>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <div className={classes.imgContainer}>
                        <img src={activeImg} alt="" />
                    </div>
                    <div className={classes.imgSlider}>
                        <Slider onClicked={(e) => setActiveImg(e)} activeImg={activeImg} slideDisplay={slideDisplay} imgList={imgList} styles={{ width: "50px", height: "50px" }} />
                    </div>
                </div>

                <div className=" col-sm-12 col-md-6 col-lg-7">
                    <p className={classes.title}>{product.title}</p>
                    <p className={classes.brand}>Barand Name:<span>{product.brand}</span></p>
                    <p className={classes.price}>BDT<span>{product.price - (product.price * product.discount / 100)}</span></p>
                    <p className={classes.discount}><span>BDT{product.price}</span><span> -{product.discount}%</span> </p>
                    <p className={classes.deleveryCost}>Shipping <span>BDT 100.00</span></p>
                    <div className={classes.selectedInput}>
                        <SelectedInput id="quantity" options={options} />
                    </div>

                    <p className={classes.availability + " " + classes.fw - 5}>Avaiablity: <span className="fw-3">123434343 units</span></p>
                    <p className={classes.quantity + " " + classes.fw - 5}>Quantity: <span></span></p>
                    <div className={classes.amount}>
                        <div onClick={() => quantity > 1 && updateQuantity(quantity - 1)} className={quantity > 1 ? classes.plusMinus + " " + classes.active : classes.plusMinus}><i class="fas fa-minus"></i></div>
                        <div>{quantity} </div>
                        <div onClick={() => updateQuantity(quantity + 1)} className={quantity < 50 ? "plusMinus active" : "plusMinus"}><i class="fas fa-plus"></i></div>
                    </div>

                    <div className={classes.btnContainer}>
                        <div style={{ marginRight: "30px" }}>
                            <Button styles={{ fontSize: "16px", height: "40px", width: "160px" }} title="ADD TO BAG" />
                        </div>
                        <div>
                            <Button styles={{ fontSize: "16px", height: "40px", width: "160px" }} title="BUY NOW" />
                        </div>

                    </div>
                </div>
            </div>

            <div className={classes.description}>
                <p className={classes.fw - 6}>Description</p>
                <p className={classes.descriptionPara}>
                    Description Origin: BangladeshGentle, alcohol-free formula.Kills 99.9% of bacteriaPre-moistured with waterLight-scentedIngredients: Leaf juice, water, Disodium EDTA, glycerin, citric acid, benzalkonium chloride, sodium benzoate, polysorbate 20, aloe barbadensis, Vitamin E, Fragrance.Quantity: 80 Pcs.
                </p>
            </div>
            <div className="container">
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
        </div>
    );
}

export default ProductView;