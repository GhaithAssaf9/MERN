import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import Delete from './Delete';
import axios from 'axios';
import Form from '../components/Form';


const AllProduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });
    const [error, setError] = useState({});
    const [loaded, setLoaded] = useState(false); 
    const [products, setProducts] = useState([]);


    const handleOnSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/product", product)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setError(res.data.errors);
                }
                else {
                    setLoaded(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loaded]); //loded

    const afterDelete = (deletedProductById) => {
        let filterProduct = products.filter((product) => {
            return product._id !== deletedProductById;
        });
        setProducts(filterProduct);
    }
    return (
        <div>
            <Form product={product} setProduct={setProduct} error={error} handleSubmit={handleOnSubmit} submitButton={"please Add Product"}

            />
            <h1>All Product:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="single">
                            <Link to={"/product/" + product._id}>
                                {product.title}
                            </Link>
                            <Delete id={product._id} afterDelete={afterDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProduct;

