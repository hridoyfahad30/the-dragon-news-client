import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
 
const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 my-4 p-4'>
            <h1>Q-Zone</h1>
            <div className='text-center my-3'>
                <img className='my-2' src={QZone1} alt="" />
                <img className='my-2' src={QZone2} alt="" />
                <img className='my-2' src={QZone3} alt="" />
             </div>
        </div>
    );
};

export default QZone;