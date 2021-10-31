import React from 'react'
import Contact from './Contact'
import Divers from './Divers'
import Formation from './Formation'
import Profil from './Profil'

const BlockLeft = () => {
    return (
        <div className="blockLeft">
            <Profil 
                className='profil'
            />

            <Contact 
                className="contact"
            />

            <Formation 
                className="formation"
            />

            <Divers 
                className="divers"
            />

        </div>
    )
}

export default BlockLeft
