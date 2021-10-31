import React, { useState } from 'react'
import uniqueId from 'uniqueid'
import Competences from './Competences'
import Experience from './Experience'

const BlockRight = () => {

    const [data, setData] = useState([
        {
            id: uniqueId,
            value: "JavaScript",
            bulle: 9
        },
        {
            id: uniqueId,
            value: "React JS",
            bulle: 8
        },
        {
            id: uniqueId,
            value: "Node JS & Express JS & Api-REST",
            bulle: 7
        },
        {
            id: uniqueId,
            value: "MongoDB & Bootstrap & Jquery",
            bulle: 6
        },
        {
            id: uniqueId,
            value: "Sass & Redux & Trello",
            bulle: 7
        },
        {
            id: uniqueId,
            value: "Css3",
            bulle: 9
        },
        {
            id: uniqueId,
            value: "Git & GitHub",
            bulle: 8
        },
        {
            id: uniqueId,
            value: "Php & MySql",
            bulle: 5
        }
    ])

    return (
        <div className="blockRight">

            <Competences 
                data={data}
                className="competences"
            />

            <Experience 
                className="experiences"
            />

        </div>
    )
}

export default BlockRight
