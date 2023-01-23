import React from 'react'
import Product from './Product'
import bannerimg from '../5092428.jpg'
import './Home.css'
import iphoneimage from '../productimages/iphone/iphoneimageone.jpg'

const Home = ()=>{
    const ITEMS=[
        {
            name:"Iphone 13 pro max ultra",
            rating:5,
            image:{iphoneimage},
            price:50000
        },
        {
            name:"Iphone 14 pro max ultra",
            rating:4,
            image:{iphoneimage},
            price:80000
        },
        {
            name:"Iphone 11 pro max ultra",
            rating:3,
            image:{iphoneimage},
            price:60000
        },
        {
            name:"Iphone 10 pro max ultra",
            rating:5,
            image:{iphoneimage},
            price:40000
        },
        {
            name:"Iphone 11 pro max ultra",
            rating:4,
            image:{iphoneimage},
            price:45000
        },
        {
            name:"Iphone 7 pro max ultra",
            rating:4,
            image:{iphoneimage},
            price:37000
        }
    ]
    return (
        <>
        <div className='home-container'>
            <div className='rowimage'>
                <img src={bannerimg} alt='iphone logo' className='banner-image' style={{height:"60vh", width:"100%"}}/>
            </div>
            <div className='row'>
           { ITEMS.map((item)=>
             <Product name={item.name} rating={item.rating} image={item.image} price={item.price} />)}
            </div>
        </div>
        </>
    );
}

export default Home;