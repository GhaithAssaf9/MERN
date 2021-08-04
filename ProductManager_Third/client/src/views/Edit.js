import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import Delete from './Delete';


const Edit = (props) => {
    const { id } = props;
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/product/" + id, product)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/produt/" + id);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const afterDelete = () => {
        navigate("/product");
    }

    return (
        <div>
            <Link to="/product" className="right">All Product</Link>
            <h1>Edit Product</h1>
            <div className="display">
                <Form  product={product} setProduct={setProduct} error={errors}  handleSubmit={handleOnSubmit} />
                <Delete
                    id={product._id}
                    afterDeleteHandler={afterDelete}
                />
            </div>
        </div>
    )
}

export default Edit;
