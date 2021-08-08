import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const deleteProduct = (x) => {
        axios.delete("http://localhost:8000/api/products/delete/" + x)
        .then(res => console.log("-I- " + res))
        .catch(err => console.log("-E- " + err))
    }

    return (
        <button type="button" class="btn btn-danger" onClick={e => {deleteProduct(props.id)}}>
            Delete
        </button>
    )
}

export default DeleteButton
