import React from 'react';
import axios from 'axios';

const Delete = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/player/${props.playerId}`)
            .then(res => {
                if (window.confirm(`You wanna delete  ?   `  )) { //+ {props.play.name}
                    props.successCallback();
                }
            })
    }
    return (
        <button onClick={onClickHandler} >Delete</button>
    )
}
export default Delete