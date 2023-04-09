import React, { useContext } from 'react';
import { MoneyCoontext, RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    const [money,setMoney] = useContext(MoneyCoontext)
    return (
        <div>
            <h2>Special</h2>
            <h1>{angti}</h1>
            <h1>Grandpa give me {money-500} taka</h1>
            
        </div>
    );
};

export default Special;