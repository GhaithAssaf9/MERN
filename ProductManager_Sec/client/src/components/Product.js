import React, { useState } from 'react'
import axios from 'axios';

const Product = () => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState();
    const [priceError, setPriceError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const priceErrMesgs = {
        empty: "shouldnt be empty",
        minPrice: "price must > 5"
    };

    const titleErrMesgs = {
        empty: "shouldnt be empty",
        minLength: "must > 3 char"
    };
    const descErrMesgs = {
        empty: "shouldnt be empty",
        mindesc: "cannot be less than 3 char"
    };

    const submitErrMesgs = {
        noSubmit: "errors appear"
    };
    const CreateProduct = e => {
        e.preventDefault();
        if (titleChange(title) && priceChange(price) && descChange(description)) {
            const newProduct = { title: title, price: price, description: description };
            axios.post('http://localhost:8000/api/product', {
                title,
                price,
                description
            })
                .then(res => console.log(res))
                .catch(err => {

                    const errormsg = err.response.data.error.errors.title.message + ", "
                        + err.response.data.error.errors.price.message + ","
                        + err.response.data.error.errors.description.message;
                    setError(errormsg);
                })
        } else {
            setError(submitErrMesgs.noSubmit);
        }
       

    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you !";
        } else {
            return "Welcome, please add product";
        }
    };
    const titleChange = (value) => {
        setError(value);
        if (value.length < 0) {
            return false;
        } else if (value.length < 3) {
            
            return false;
        } else {
            setTitleError("");
            return true;
        }
    };
    const priceChange = (value) => {
        setPriceError(value);
        if (value.length < 1) {
            setPriceError(priceErrMesgs.empty);
            return false;
        } else if (!isNaN(value) && parseInt(value) < 5) {
            setPriceError(priceErrMesgs.minPrice);
            return false;
        } else {
            setPriceError("");
            return true;
        }
    };
    const descChange = (value) => {
        setError(value);
        if (value.length < 1) {
            setDescriptionError(descErrMesgs.empty);
            return false;
        } else if (value.length < 3) {
            setDescriptionError(descErrMesgs.mindesc);
            return false;
        } else {
            setDescriptionError("");
            return true;
        }
    };
    return (

        <div style={{ marginLeft: "666px" }}>
            <h3>{formMessage()}</h3>
            <h1>Product Manager</h1>
            <form onSubmit={CreateProduct}>
                <div>
                    <label>Title  : </label>
                    <input type="text" onChange={(e) => titleChange(e.target.value)} />
                    <p style={{ color: 'red' }}>{titleError}</p>
                </div> <br />
                <div>
                    <label>Price  : </label>
                    <input type="number" onChange={(e) => priceChange(e.target.value)} /> <p style={{ color: 'red' }}>{priceError}</p>
                </div><br />
                <div>
                    <label>description :</label>
                    <input type="textArea" onChange={(e) => descChange(e.target.value)} /><p style={{ color: 'red' }}>{descriptionError}</p>
                </div><br />

                <input type="submit" value="create" />
            </form>
        </div>
    )
}
export default Product