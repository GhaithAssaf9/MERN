import React from 'react';
import axios from 'axios';

const Delete = (props) => {
    const { id, afterDeleteHandler } = props;

    const deleteHandler = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/product/delete/" + id)
            .then((res) => {
                console.log(res.data);
                afterDeleteHandler(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="delete">
            <button className="deleteBtn" onClick={(e) => deleteHandler(e, id)}>Delete</button>
        </div>
    )
}

export default Delete;