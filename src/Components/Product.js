import React, { useState } from "react";
import iphoneimage from '../productimages/iphone/iphoneimageone.jpg'
import './Product.css'
import { useDispatch } from "react-redux";
import { increase,decrease } from "../reduxstore/counterSlice";
import {add,remove} from '../reduxstore/amountSlice'
import {addProduct} from '../reduxstore/cartproductSlice'

const Product = (props)=>{
    const {name,price} = props
    const dispatch = useDispatch()
    const [isAdded,setAdded] = useState(false)
    const [button,setButton] = useState("Add to Cart");

    function handleAddToCart (){
        if(isAdded===false){
            setAdded(true);
            setButton('Remove from Cart')
            dispatch(increase())
            dispatch(add(price))
            dispatch(addProduct({
                name,
                price
            }))
        }
        else{
            setAdded(false)
            setButton('Add to Cart')
            dispatch(decrease())
            dispatch(remove(Number(price)))
        }
    }
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
                <img src={iphoneimage} style={{height:"20vh",width:"100%"}} alt='product'/>
                </div>
                <div className="price-addtocart">
                <p>{price}</p>
                <button className="addtocart" onClick={handleAddToCart}>{button}</button>
                </div>
            </div>
        </>
    );
}

export default Product;