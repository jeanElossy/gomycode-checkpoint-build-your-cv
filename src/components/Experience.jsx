import React from 'react'

const Experience = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="text-center text-xl-start">EXPERIENCES PROFESSIONNELLES</h1>

            <div className="part__one mt-4">
                <h2 className="title h4">Réalisation de projet d'étude</h2>
                <div className="part__one--content">
                    <div className="periode">JUIN 2021 - AOUT 2021</div>
                    <ul className="link-one d-flex flex-column gap-3">
                        <li>
                            Réalisation de portfolio (HTML5 & CSS3)
                        </li>
                        <li>
                            Réalisation d'un système de panier (HTML5 & CSS3 & JAVASCRIPT)
                        </li>
                    </ul>
                    <div className="periode">AOUT 2021 - OCTOBRE 2021</div>
                    <ul className="link-two d-flex flex-column gap-3">
                        <li>Réalisation d'une copie de youtube (React Js)</li>
                        <li>
                            Réalisation d'une liste de tache en faisant un CRUD (React Js, Redux) {} 
                            <a 
                                href="https://jeannelo.netlify.app"
                                target="_blank"
                                without
                                rel="noreferrer"
                                style={{textDecoration: "underline"}}
                            > 
                                Todolist
                            </a>.
                        </li>
                        <li>Réalisation d'une applisation (Node Js, Express Js)</li>
                        <li>Communication avec l'API JSONPlaceholder pour test en (React Js & Javascript)</li>
                        <li>Création en cours d'une API REST de donnée de la communauté Gomycode Côte d'Ivoire.</li>
                    </ul>
                </div>
            </div>
            <div className="part__two">
                <h3 className="h4">Participation à un projet e-commerce (LMC)</h3>
            </div>
            <div className="topIcon">
                <a href="#">
                    <i class="fas fa-chevron-up"></i>
                </a>        
            </div>
        </div>
    )
}

export default Experience
