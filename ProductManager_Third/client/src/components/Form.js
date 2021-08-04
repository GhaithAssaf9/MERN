
import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const { product, setProduct , products , setProducts ,  submitButton, handleSubmit } = props; 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const productChange = (e) => {
        let newProduct = { ...product, [e.target.name]: e.target.value }; 
        setProduct(newProduct);

    }
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you !";
        } else {
            return "Welcome, please add product";
        }
    };
   
    return (
        <div>
            <h1>{formMessage()}</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>Title  :</label>
                        <input type="text" name="title" value={product.title} onChange={(e) => productChange(e)} />
                        <p></p>
                </div>
                <div>
                    <label>Price  :</label>
                        <input type="number"  name="price"  value={product.price} onChange={(e) => productChange(e)} />
                </div>
                <div>
                    <label>Description:</label>
                        <input type="text" name="description" value={product.description} onChange={(e) => productChange(e)} />
                </div>
                <button type="submit" className="submit" style ={{ marginBottom  :"100px"}}>{submitButton}</button>
            </form>
            < hr style ={{ marginBottom  :"60px"}} />
        </div>
        
    )
}

export default Form;