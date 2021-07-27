import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const People = (props) => {

    const [p, setP] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response=>{setP(response.data)})
            console.log(p)
    }, [props.id]);



    return (
        <div>
            <article>
                <h3> {p.name} </h3>
                <ul>
                    <li>   height:{p.height} </li>
                    <li> mass:{p.mass} </li>
                    <li> Hair Color: {p.hair_color} </li>
                    <li> Skin Color: {p.skin_color} </li>
                </ul>
            </article>
        </div>
    )
}

export default People
