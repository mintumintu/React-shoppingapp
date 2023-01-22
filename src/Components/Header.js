import React from 'react'
import './Header.css'
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import SearchIcon from '@mui/icons-material/Search';
import {MdOutlineStorefront,MdSearch, MdShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = ()=>{
    return (
       <div className='header'>
        <div className='logo-container'>
        <Link to='/' style={{display:'flex'}}>
        <MdOutlineStorefront size={40} className='site-logo' color='orange'/>
        <p className='sitename' style={{textDecoration:'none',color:'white'}}>Eshop</p></Link>
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
        <Link to='/cart'>
            <p style={{textDecoration:'none',color:'white'}}>Your Cart</p>
        <MdShoppingCart size={25} color='white' /><span style={{textDecoration:'none',color:'white'}}>0</span>
        </Link>
        </div>
       </div>
    );
}

export default Header