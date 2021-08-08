
import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';

const Form = (props) => {

    const { newPlayer, setNewPlayer, onSubmit } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [game1, setGame1] = useState(0);
    const [game2, setGame2] = useState(0);
    const [game3, setGame3] = useState(0);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            position,
            game1,
            game2,
            game3
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div >
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Position:</label>
                    <input type="text" onChange={(e) => setPosition(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;