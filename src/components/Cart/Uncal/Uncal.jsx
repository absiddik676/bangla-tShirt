import React, { useContext } from 'react';
import Cusian from '../../Cusian/Cusian';
import { MoneyCoontext } from '../../GrandPa/GrandPa';

const Uncal = () => {
    const [money,setMoney] = useContext(MoneyCoontext)
    return (
        <div>
            <h1>Uncal</h1>
            <button onClick={()=>setMoney(money+1000)}>send 1000TK</button>
            <section>
                <Cusian>Nabil</Cusian>
                <Cusian>Nabila</Cusian>
            </section>
        </div>
    );
};

export default Uncal;