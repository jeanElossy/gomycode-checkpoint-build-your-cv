import React from 'react'

const Formation = ({ className }) => {


    return (
        <div className={className}>
            <h1 className="mt-5 text-center text-xl-start">FORMATIONS ET CERTIFICATIONS</h1>
            <div className="link">
                <ul className="d-flex flex-column gap-3">
                    <li>
                        Certificat Gomycode developpeur Fullstack Junior JavaScript (MERN), 2021 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. fullstack Js"
                            style={{textDecoration: "underline"}}
                        >
                            Fullstack Js
                        </a>
                    </li>
                    <li>
                        Certificat LinkedIn React JS, 2021 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. React Js"
                            style={{textDecoration: "underline"}}
                        >
                            React jS
                        </a>
                    </li>
                    <li>
                        Certificat LinkedIn Bootstrap, 2021 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. Bootstrap"
                            style={{textDecoration: "underline"}}
                        >
                            Bootstrap 
                        </a>
                    </li>
                    <li>
                        Certificat OpenClassrooms React, JavaScript, 2020 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. Javascript"
                            style={{textDecoration: "underline"}}
                        >
                            JavaScript
                        </a>
                    </li>
                    <li> 
                        Certificat OpenClassrooms PHP & MYSQL, 2020 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. Php & MySql"
                            style={{textDecoration: "underline"}}
                        >
                            Php & MySql
                        </a>
                    </li>
                    <li>
                        Certificat OpenClassrooms HTML5 & CSS3, 2019 {} 
                        <a 
                            href="/"
                            target="_blank"
                            without
                            rel="noreferrer"
                            title="Certif. Html5 & Css3"
                            style={{textDecoration: "underline"}}
                        >
                            Html5 & Css3
                        </a>
                    </li>
                    <li>
                        Brevet de Technicien Superieur (BTS) a IPF-BOUAKE en Finances Comptabilite et Gestion des Entreprises, 2019
                    </li>
                    <li>
                        Baccalaureat (BAC) au Lycee Classique Bouake serie D, 2013
                    </li>
                    
                    </ul>
                </div>
        </div>
    )
}

export default Formation;
