import React from 'react';

const Cart = ({cart,handelRemoveFromCart}) => {
    console.log(cart);
    let message;
   if (cart.length === 0) {
    message = <p>pleas add some product</p>
   }else{
    message =<div>
        <h3>Brolokxxx</h3>
        <p>Thanks for giving your mo</p>
    </div>
   }
    return (
        <div>
            <h1>Oder summery : {cart.length}</h1>
            {message}
            {cart.length === 2 ? <p>aro kino</p>:<p>fokira</p>}
            {
                cart.map(shirt => <p>{shirt.name} <button onClick={()=>handelRemoveFromCart(shirt._id)}>X</button></p>
                )
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
        </div>
    );
};

export default Cart;