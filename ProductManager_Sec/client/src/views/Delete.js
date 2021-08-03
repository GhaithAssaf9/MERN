import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import List from '../components/thelist';
import { Link } from '@reach/router';
const Delete = (props) => {
    const { id, afterDelete } = props;
    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/product/delete" + id)
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
            <button className="delete" onClick={(e) => deleteProduct(e, id)}>Delete</button>
        </div>

    )
}
export default Delete;