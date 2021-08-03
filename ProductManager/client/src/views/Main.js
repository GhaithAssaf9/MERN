
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product'; 
const Main = () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            {}
            <Product />
        </div >
    )
}
export default Main