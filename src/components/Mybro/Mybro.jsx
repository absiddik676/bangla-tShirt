import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Mybro = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>My Bro</h1>
            <p>Ring : {ring}</p>
        </div>
    );
};

export default Mybro;