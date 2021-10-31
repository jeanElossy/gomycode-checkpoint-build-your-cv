import React from 'react'
import ProgressBulle from './ProgressBulle';


const Competences = ({ className, data }) => {


    return (
        <div className={className}>

            <h1 className="mb-4 text-center text-xl-start">COMPETENCES</h1>

            <div className="performance d-flex justify-content-between mb-4">
                <span>Performance</span>
                <span>/5</span>
                <span>/10</span>
            </div>

            {
                data.map((item) => {
                    return (
                        <ProgressBulle 
                            key={item.id}
                            item={item}
                            className='progressBulle'
                        />
                    )
                })
            }

        </div>
    )
}

export default Competences
