import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from './Delete';


const AllAuthor = (props) => {
    const [author, setAuthor] = useState({
        name: " ",
    });
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [authors]);

    const afterDelete = (deletedAuthorBytId) => {
        let filteredAuthor = authors.filter((author) => {
            return author._id !== deletedAuthorBytId;
        });
        setAuthors(filteredAuthor);
    }

    return (
        <div className="All">
            <h1>Favorite authors</h1>
            <Link to={"/author/new"} >Add an author</Link>
            <h3>We have quotes by:</h3>
            <div style={{ marginLeft: "700px" }} >
                
                <table className="table" border="1" width="50%" >
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td >
                                        <Link to={"/author/edit/" + author._id}>
                                            <button className="btnEdit">Edit</button>
                                        </Link>
                                        <Delete
                                            id={author._id}
                                            afterDeleteHandler={afterDelete}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllAuthor;