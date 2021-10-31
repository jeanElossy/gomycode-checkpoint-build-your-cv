import React from 'react'

const Experience = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="text-center text-xl-start">EXPERIENCES</h1>

            <div className="part__one mt-4">
                <h2 className="title h4">Realisation de projet d'etude</h2>
                <div className="part__one--content">
                    <div className="periode">JUIN 2021 - AOUT 2021</div>
                    <ul className="link-one d-flex flex-column gap-3">
                        <li>
                            Realisation de portfolio (HTML5 & CSS3)
                        </li>
                        <li>
                            Realisation d'un systeme de panier (HTML5 & CSS3 & JAVASCRIPT)
                        </li>
                    </ul>
                    <div className="periode">AOUT 2021 - OCTOBRE 2021</div>
                    <ul className="link-two d-flex flex-column gap-3">
                        <li>Realisation d'une copie de youtube (React Js)</li>
                        <li>
                            Realisation d'une liste de tache en faisant un CRUD (React Js, Redux) {} 
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
                        <li>Realisation d'une applisation (Node Js, Express Js)</li>
                        <li>Communicaion avec l'API JSONPlaceholder pour test (React Js & Javascript)</li>
                        <li>Creation en cours d'une API REST de donnee de la communaute Gomycode Cote d'Ivoire.</li>
                    </ul>
                </div>
            </div>
            <div className="part__two">
                <h3 className="h4">Participation a un projet e-commerce (LMC)</h3>
            </div>
        </div>
    )
}

export default Experience
