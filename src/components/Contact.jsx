import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';



const Contact = ( { className }) => {

    return (
        
            <div className={className}>

                <h1 className="text-center text-xl-start mt-5"> CONTACTS</h1>

                <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>Abidjan / Cote D'Ivoire</div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <i className="far fa-envelope"></i>

                        <div>
                            <a 
                                href="mailto:jean.elossy@gmail.com"
                                title="M'envoyé un mail"
                            >
                                jean.elossy@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="00225 0749490835">
                            <span className="clickInput" onClick={() => {
                                alert("Numero de telephone copie !");
                            }}>
                                (+225) 07 494 908 35
                            </span>
                        </CopyToClipboard>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <i className="fab fa-linkedin"></i>
                        <div>
                            <a 
                                href='http://www.linkedin.com/in/jean-elossy-25585b152/'
                                title="Linkedin"
                                target="_blank"
                                without
                                rel="noreferrer"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>
                    
                    <div className='d-flex align-items-center gap-3'>
                        <i className="fab fa-github"></i>
                        <div>
                            <a 
                                href="http://github.com/jeanElossy"
                                title="GitHub"
                                target="_blank"
                                without
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div>
                        <span></span>
                        <div>
                            <a 
                                href="http://jeanelossy.netlify.app"
                                title="Mon portfolio"
                                target="_blank"
                                without
                                rel="noreferrer"
                            >
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

export default Contact
