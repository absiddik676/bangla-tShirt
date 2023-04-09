import React from 'react';
import Myself from '../Myself/Myself';
import Mybro from '../Mybro/Mybro';
import Mysister from '../Mysister/Mysister';

const Father = ({ring}) => {
    return (
        <div>
            <h1>Father</h1>
            <section className='flex'>
            <Myself ring={ring}></Myself>
            <Mybro></Mybro>
            <Mysister></Mysister>
            </section>
        </div>
    );
};

export default Father;