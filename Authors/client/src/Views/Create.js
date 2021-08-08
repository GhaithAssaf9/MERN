import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Form from '../components/Form';

const Create = (props) => {
    const [error, setError] = useState({});
    const [author, setAuthor] = useState({
        name: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/author", author)
            .then((res) => {
                console.log(res.data);
                if (res.data.errors) {
                    setError(res.data.errors);
                }
                else {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"} >Home</Link>
            <h3>Add a new author</h3>
            <Form
                author={author}
                setAuthor={setAuthor}
                errors={error}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Create;