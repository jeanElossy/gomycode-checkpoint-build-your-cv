import React from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = ( { className }) => {



    // <CopyToClipboard text="0749490835">
//                             <span className="clickInput" onClick={() => {
//                                     alert("Numero de telephone copie !");
//                                 }}>
//                                     07 494 908 35
//                             </span>
//                         </CopyToClipboard>


    return (
        
            <div className={className}>

                <h1 className="text-center text-xl-start mt-5"> CONTACTS</h1>

                <div>
                    <div>
                        <i className="fas fa-map-marker-alt"></i>
                        <div>Abidjan / Cote D'Ivoire</div>
                    </div>

                    <div>
                        <i className="far fa-envelope"></i>
                        <div>
                            <a 
                                href="mailto"
                                title="M'envoyé un mail"
                            >
                                jean.elossy@gmail.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <span>
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        <div>
                            07 494 908 35 
                        </div>
                    </div>

                    <div>
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
                    
                    <div>
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
