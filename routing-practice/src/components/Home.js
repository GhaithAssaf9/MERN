import React from 'react'
import { Link } from '@reach/router';

const Home = () => {
    return (
        <>
            <h2> Hello </h2>
            <div style={{
                background: "lightgreen", color: "red", fontWeight: "bold", height: "20px"
            }}>
                <Link to="/" > EMPTY</Link>
            </div>
        </>
    )
}

export default Home