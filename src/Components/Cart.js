import React from "react";
import Product from './Product'
import './Cart.css'
import { useSelector } from "react-redux";

const Cart = ()=>{
    const amount = useSelector((state)=>state.total.value);
    return(
        <div className="cart-body">
            <div className="left-section">
            <p>Your Shopping Cart</p>
            <Product />
            <Product />
            </div>
            <div className="right-section">
            <div className="subtotal">
             <p>Your total is {amount}</p>
             <p><input type='checkbox' />This item contains a gift</p>
             <button  className="addtocart">Checkout</button>
            </div>
            </div>
        </div>
    );
}

export default Cart;