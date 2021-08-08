import React from 'react';
import axios from 'axios';


const Delete = (props) => {
    const { id, afterDelete } = props;

    const deleteHandler = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/author/delete/" + id)
            .then((res) => {
                console.log(res.data);
                afterDelete(id);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="delete">
            <button className="btn1" onClick={(e) => deleteHandler(e, id)}>Delete</button>
        </div>
    )
}

export default Delete;