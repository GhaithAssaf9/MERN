import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteBtn from './Delete';
import Header from './Header';


const List = (props) => {
    const { player, setPlayer } = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
            .then(res => setPlayer(res.data))
    }, [])

    const remove = (playerId) => {
        setPlayer(player.filter(players => player._id !== playerId))
    }

    return (
        <div>
            <Header />
            <table  border="1" width="60%">
                <tbody >
                    <tr>
                        <td> <h3>Players</h3></td>
                        <td><h3>Preferred Position</h3></td>
                        <td><h3>Actions</h3></td>
                    </tr>
                    {player.map((players, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{players.name}</td>
                                <td>{players.position}</td>
                                <td><DeleteBtn playerId={players._id} successCallback={() => remove(players._id)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default List