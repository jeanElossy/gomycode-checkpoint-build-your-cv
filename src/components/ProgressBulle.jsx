import React from 'react'

const ProgressBulle = ({ item, className }) => {

    let nbreBulles = 10;
    let progressBulle = item.bulle / nbreBulles * 100 + '%';

    

    return (
        <div className={className}>
                <h1 className='h5'>{item.value}</h1>
                <div 
                    className='progress mb-4'
                    style={{width:progressBulle}}
                >

                </div>
        </div>
    )
}

export default ProgressBulle;
