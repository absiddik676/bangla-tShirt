import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';
import './Home.css'
const Home = () => {
    
    const tShirt = useLoaderData()
    const [cart,setCart] = useState([])
    const handelAddToCart = tshirt =>{
        const isExist = cart.find(ts => ts._id === tshirt._id)
        if(isExist){
           toast('You have already added this  t-shirt')
        }
        else{
            const newCart = [...cart,tshirt]
            setCart(newCart)
        }
        
    }
    const handelRemoveFromCart = id =>{
        const remaining = cart.filter(shirt => shirt._id !== id) ;
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                
                {
                    tShirt.map(shirt => <Tshirt 
                        key={shirt._id} 
                        shirt={shirt}
                        handelAddToCart={handelAddToCart}
                        
                        ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;