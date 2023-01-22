import React from "react";
import Product from './Product'
import './Cart.css'
import { useSelector,useDispatch } from "react-redux";
import { increase,decrease } from "../reduxstore/counterSlice";

const Cart = ()=>{
    return(
        <div className="cart-body">
            <div className="left-section">
            <p>Your Shopping Cart</p>
            <Product />
            <Product />
            </div>
            <div className="right-section">
            <div className="subtotal">
             <p>Your total is 500</p>
             <p><input type='checkbox' />This item contains a gift</p>
             <button>Checkout</button>
            </div>
            </div>
        </div>
    );
}

export default Cart;