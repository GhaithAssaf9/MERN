import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './views/card';
import Product from './Product';

const Info = (props) => {
    const { className } = props;
    const [allProduct, setAllProduct] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/product")
                .then(res => {
                    setAllProduct(res.data.users);
                })
        }, [allProduct]
    );

    return (
        <>
           
            <Product className="card" />
            <div className={className}>
                {
                    allProduct.map((product) =>
                        <Card className="box" productinfo={product} key={product._id} />
                    )
                }
            </div>
        </>
    );
};
export default Info