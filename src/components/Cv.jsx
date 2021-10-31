import React from 'react'
import BlockLeft from './BlockLeft'
import BlockRight from './BlockRight'
import Footer from './Footer'
import Header from './Header'

const cv = () => {
    return (
        <div className="cv">
            <Header />

            <div className="container-fluid">
                <div className="row ">
                    
                    <div className="col-12 col-md-7 left">
                        <BlockLeft />
                    </div>

                    <div className="col-12 col-md-5 right">
                        <BlockRight />
                    </div>

                </div>
            </div>

            <Footer />
            
        </div>
    )
}

export default cv
