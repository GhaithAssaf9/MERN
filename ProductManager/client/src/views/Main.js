
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// export default () => {
//     const [message, setMessage] = useState("Loading...")
//     useEffect(() => {
//         axios.get("http://localhost:8000/api")
//             .then(res => setMessage(res.data.message))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }
// import React, { useEffect, useState } from 'react';
// import Product from '../components/Product';
// const Main = () => {
//     return (
//         <div>
//             <Product />
//         </div>
//     )
// }
// export default Main
/////
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
            {/* <h2>Message from the backend: {message}</h2> */}
            <Product />
        </div >
    )
}
export default Main