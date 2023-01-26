import React from "react";
import Product from './Product'
import './Cart.css'
import { useSelector } from "react-redux";

const Cart = ()=>{
    const products = useSelector(state=>state.products)
    const amount = useSelector(state=>state.amount)

    const renderProducts = products.map(pro=>(
        <Product name={pro.name} price={pro.price} />
    ))

    return(
        <>
            <p>Your Shopping Cart</p>
            {renderProducts}
            <p>Your total is {amount}</p>
            <p><input type='checkbox' />This item contains a gift</p>
            <button  className="addtocart">Checkout</button>
        </>
    );
}

export default Cart;