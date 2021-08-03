
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import List from '../components/thelist';
import Details from './Details';
import AllProduct from './AllProduct';


const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <Product />
            {loaded && <List product={product} />}
            <hr />
            {}
            <AllProduct />
            <hr />
            <Details />

        </div>
    )
}
export default Main
