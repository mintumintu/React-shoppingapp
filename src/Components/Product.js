import React from "react";
import iphoneimage from '../productimages/iphone/iphoneimageone.jpg'
import './Product.css'

const Product = (props)=>{
    const {name,rating,price,image} = props
    return (
        <>
            <div className="product-container">
                <div className="product-name">
                <p>{name}</p>
                </div>
                <div className="product-rating">
                <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="product-image">
                <img src={iphoneimage} style={{height:"20vh",width:"100%"}}/>
                </div>
                <div className="price-addtocart">
                <p>{price}</p>
                <button className="addtocart">Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default Product;