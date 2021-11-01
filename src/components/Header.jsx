import React from 'react';
import AOS from 'aos';


const Header = () => {

    AOS.init();

    return (
        <div className='header container-fluid'>
            <div className="row justify-content-center align-items-center p-md-3">
    
                <div className="overlay"></div>
                <div className="
                    photo 
                    col-12 
                    col-md-4
                    text-center 
                    text-md-start"
                    data-aos="fade-right"
                >
                    <img 
                        src="./data/carte_identité.jpg" 
                        className="rounded-circle img-responsive" 
                        alt="img" 
                        height="400"
                        width="400"
                    />
                </div>
                
                <div className="text col-12 col-md-7 text-center text-md-start" data-aos="fade-right">
                    <h1>JEAN ELOSSY</h1>
                    <h2 className="h4">
                        DEVELOPPEUR FULLSTACK JAVASCRIPT JUNIOR <br /> ( REACT JS / NODE JS )
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default Header
