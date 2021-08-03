// // import axios from 'axios';
// // import React from 'react';

// // const Card = (props) => {
// //     const { className, productinfo } = props;

// //     const deleteUser = (e) => {
// //         axios.delete("http://localhost:8000/api/product/delete/" + productinfo._id)
// //             .then(res => console.log("-I- " + res))
// //             .catch(err => console.log("-E- " + err))
// //     }

// //     return (
// //         <div className={className}>
// //             <p>{"Title " + productinfo.title}</p>
// //             <p>{"Price: " + productinfo.price}</p>
// //             <p>{"Description: " + productinfo.Description}</p>
// //             <button onClick={deleteUser}>delete</button>
// //         </div>
// //     );
// // };
// // export default Card
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';
// import Product from './Product';
// import Delete from '../views/Delete';

// const AllProduct = (props) => {
//     const [products, setProducts] = useState([]);
//     const [errors, setErrors] = useState({});
//     const [product, setProduct] = useState({
//         title: "",
//         price: "",
//         description: "",
//     });
//     const [loaded, setLoaded] = useState(false);


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axios.post("http://localhost:8000/api/product", product)
//             .then((res) => {
//                 console.log(res.data);
//                 if (res.data.errors) {
//                     setErrors(res.data.errors);
//                 }
//                 else {
//                     // navigate("/products");
//                     setLoaded(true);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/product")
//             .then((res) => {
//                 console.log(res.data);
//                 setProducts(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [loaded]);

//     const afterDelete = (deletedProductId) => {
//         let filteredProduct = products.filter((product) => {
//             return product._id !== deletedProductId;
//         });
//         setProducts(filteredProduct);
//     }

//     return (
//         <div>
//             <Product
//                 product={product}
//                 setProduct={setProduct}
//                 errors={errors}
//                 handleSubmit={handleSubmit}
//                 submitButtonLabel={"Add Product"}

//             />
//             <h1>All Products:</h1>
//             {
//                 products.map((product, index) => {
//                     console.log("This is a new product")
//                     return (
//                         <div key={index} className="singleProduct">
//                             <Link to={"/products/" + product._id}>
//                                 {product.title}
//                             </Link>
//                             <Delete
//                                 id={product._id}
//                                 afterDeleteHandler={afterDelete}
//                             />
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default AllProduct;
