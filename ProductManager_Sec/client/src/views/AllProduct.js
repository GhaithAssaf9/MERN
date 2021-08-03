import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Product from '../components/Product';
import Delete from './Delete';

const AllProduct = (props) => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });
    const [view, setView] = useState(false);


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post("http://localhost:8000/api/product", product)
    //         .then((res) => {
    //             console.log(res.data);
    //             if (res.data.errors) {
    //                 setErrors(res.data.errors);
    //             }
    //             else {
    //                 // navigate("/product");
    //                 setLoaded(true);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [view]);

    const afterDelete = (deletedProductId) => {
        let filteredProduct = products.filter((product) => {
            return product._id !== deletedProductId;
        });
        setProducts(filteredProduct);
    }

    return (
        <div>
            {/* <product /> */}
            {/* <Product
                product={product}
                setProduct={setProduct}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButtonLabel={"Add Product"}

            /> */}
            <h2>All Products</h2>
            {
                products.map((product, index) => {
                    console.log("This is a new product")
                    return (
                        <div key={index} className="singleProduct">
                            <Link to={"/product/" + product._id}>
                                {product.title}
                            </Link>
                            <Delete
                                id={product._id}
                                afterDeleteHandler={afterDelete}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProduct;