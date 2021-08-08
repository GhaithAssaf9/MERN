import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Button = (props) => {
    const {playerId, gameId} = props;
    const [player, setPlayer] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/player/${playerId}`)
        .then(response => {
            setPlayer(response.data);
        })
    },[player])
    const onPlayHandler = (statusNum) => {
        console.log("Inside onPlayingHandler");
        const updatedPlayer = {...player ,
            status: {...player.status, [`game${gameId}`]: statusNum
            }
        }
        axios.put(`http://localhost:8000/api/player/${playerId}`, updatedPlayer)
        .then(response => {
                setPlayer(updatedPlayer);
        })
        .catch(err => {
            console.log("Error for updating")
        })
    }

    return(
        <div>
            <button style={{backgroundColor: player && player.status[`game${gameId}`] === 1 ? "green" : ""}} 
            onClick={(e) => onPlayHandler(1)}>
                Playing
            </button>
            <button style={{backgroundColor: player && player.status[`game${gameId}`] === -1 ? "red" : ""}} 
            onClick={(e) => onPlayHandler(-1)}>
                Not Playing
            </button>
            <button style={{backgroundColor: player && player.status[`game${gameId}`] === 0 ? "yellow" : ""}} 
            onClick={(e) => onPlayHandler(0)}>
                Undecided
            </button>
        </div>
    )
}
export default Button