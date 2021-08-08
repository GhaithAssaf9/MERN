import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Show_This = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data.Product))
    }, [product])

    return (
        <div>
            <section>
                <h3>Title: {product.title} </h3>
                <p>Price: {product.price} $</p>
                <p>Description: {product.description} </p>
                <br />
                <Link to="/" >Go Back ...</Link>
            </section>
        </div>
    )
}

export default Show_This
