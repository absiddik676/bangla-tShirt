import React from 'react';
import './Tshirt.css'
const Tshirt = ({shirt,handelAddToCart}) => {
    const {name,picture,price,gender} = shirt
    return (
        <div className='t-shirt'>
            <img className='img' src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={()=>handelAddToCart(shirt)} className='buy-btn'>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;