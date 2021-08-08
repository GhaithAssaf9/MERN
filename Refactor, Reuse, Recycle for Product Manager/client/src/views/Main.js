import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import DisplayProducts from '../components/DisplayProducts';
import { Router } from '@reach/router';


const Main = () => {

    const [products, setProducts] = useState([]);

    const getData = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.products);
            })
        }

        const createProduct = product => {
            axios.post('http://localhost:8000/api/product/new', product)
                .then(res=>{
                    setProducts([...products, res.data]);
                })
        }

    return (
        <div>
            {/* <Router> */}
                <ProductForm action="create" />
                <DisplayProducts />
            {/* </Router> */}
        </div>
    )
}

export default Main
