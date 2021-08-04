
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Delete from './Delete';

const Details = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id])

    const afterDelete = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <div>
                <Link to="/product">
                    <button type="submit">All Products</button>
                </Link>
                <Link to={"/product/edit/" + product._id}>
                    <button type="submit">Edit</button>
                </Link>
                <Delete
                    id={product._id}
                    afterDeleteHandler={afterDelete}
                />
            </div>
        </div>
    )
}

export default Details;