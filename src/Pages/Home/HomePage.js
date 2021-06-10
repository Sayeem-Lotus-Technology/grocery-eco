import Cart from "../../Components/Cart/cart";
import Product from "../../Components/Product_category/Product"
import classes from "./Home.module.css"
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductSlide from "./ProductSlide/ProductSlide";
import coverImage from "./../../Asset/coverImage.png";
import giftImage from "./../../Asset/giftImage.png"
import Searchbar from "../../Components/SearchBar/Searchbar";
import { useState } from "react";
import { useHistory } from "react-router";

const HomePage = () => {
    const history=useHistory()
    return ( 
        <div className={classes.homepage}>

                    {/* <div className={classes.slideContainer}>
                        <div className={classes.slide}>
                            <ProductSlide />
                        </div> 
                        <div className={classes.slide}>
                            <ProductSlide />
                        </div> 
                        <div className={classes.slide}>
                            <ProductSlide />
                        </div>     
                    </div> */}

            <div className={classes.coverImageContainer}>
                <img src={coverImage} alt="" />
                <div className={classes.coverSearch}>
                    <p>Groceries delivered in 1 hour</p>
                    <div className={classes.searchContainer}>
                        <Searchbar />
                    </div>

                </div>
            </div>

            <div className={classes.giftImageContainer}>
                <img src={giftImage} alt="" />
            </div>

            <div className={classes.productCategory}>
            <h2 className=" mt-5 mb-3 text-center">Product Categories</h2>
                <div className={classes.categoeryContainer}>
                    <ProductCategory/>
                    <ProductCategory/>
                    <ProductCategory/>
                    <ProductCategory/>
                    <ProductCategory/>           
                    <ProductCategory/>            
                    <ProductCategory/>         
                    <ProductCategory/>
                </div>
            </div>

            <div className="exclusiveOffer">
                <div className="mt-5 mb-3 d-flex align-items-center">
                   <div className="flex-grow-1">
                        <h2 className="text-center">Exclusive Offer</h2>
                   </div>
                    <p onClick={()=>history.push("/product/all")} className={classes.seeAll}>See All</p>  
                </div>
                <div className={classes.displayProducts}>
                    <div className={classes.displayCart}>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="bestSelling">
                <div className="mt-5 mb-3 d-flex align-items-center">
                   <div className="flex-grow-1">
                        <h2 className="text-center">Best Selling</h2>
                   </div>
                    <p onClick={()=>history.push("/product/all")} className={classes.seeAll}>See All</p>  
                </div>
                <div className={classes.displayProducts}>
                    <div className={classes.displayCart}>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>
                        <div className={classes.singleCart}>
                            <Cart/>
                        </div>

                    </div>
                </div>
            </div>
        
        </div>

     );
}
 
export default HomePage;