import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';


const DisplayProducts = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.Products);
                
            })
        }, [products]
    );

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products ? products.map( (item) => {
                        let x = "/" + item._id;
                        return (
                        <tr key={item._id}>
                            <th scope="row">{item._id}</th>
                            <td id={item._id} className="aaa"> <Link to={x}> {item.title} </Link> </td>
                            <td id="zzz">{item.price}</td>
                            <td> {item.description} </td>
                            <td> <DeleteButton id={item._id} /> ~ <UpdateButton id={item._id} /> </td>
                        </tr>
                        )
                    }
                    
                )
                : <h1>Loading...</h1>
                }
                </tbody>
            </table>
            <br />
        </div>
    )
}

export default DisplayProducts


