import React from 'react'
import './Header.css'
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import SearchIcon from '@mui/icons-material/Search';
import {MdOutlineStorefront,MdSearch, MdShoppingCart} from 'react-icons/md'

const Header = ()=>{
    return (
       <div className='header'>
        <div className='logo-container'>
        <MdOutlineStorefront size={40} className='site-logo' color='orange'/>
        <p className='sitename'>Eshop</p>
        </div>
        <div className='search-container'>
            <input type='text' className='searchbar'/>
         <MdSearch size={35} color='black' className='search-logo' />
        </div>
        <div className='user-container'>
            <p>Hello Guest</p>
            <p>Signin</p>
        </div>
        <div className='shop-container'>
            <p>Your</p>
            <p>Shop</p>
        </div>
        <div className='cart-container'>
            <p>Your Cart</p>
        <MdShoppingCart size={25} color='white' /><span>0</span>
        </div>
       </div>
    );
}

export default Header