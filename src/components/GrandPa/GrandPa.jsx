import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncal from '../Cart/Uncal/Uncal';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'
export const RingContext = createContext('golden')
export const MoneyCoontext = createContext(0)
const GrandPa = () => {
    const ring = 'diamond'
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <h2>Has Money: {money}</h2>
            <MoneyCoontext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='Golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncal></Uncal>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyCoontext.Provider>
        </div>
    );
};

export default GrandPa;