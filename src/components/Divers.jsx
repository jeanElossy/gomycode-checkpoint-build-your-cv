import React from 'react'

const Divers = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="mt-3 text-center text-xl-start">DIVERS</h1>
            <div className="container-fluid">
                <div className="row">
                    <ul className="col-12 col-md-6">
                        <li>
                            Sport
                        </li>
                        <li>
                            Musique
                        </li>
                    </ul>
                    <ul className="col-12 col-md-6">
                        <li>
                            Lecture
                        </li>
                        <li>
                            Voyage
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Divers;


