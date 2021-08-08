import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Show_This from '../components/Show_This';
import ProductForm from '../components/ProductForm';

const Update = (props) => {

    return (
        <div>
            <ProductForm action="update" id={props.id} />
            <br /><br />
            <Show_This id={props.id} />
        </div>
    )
}

export default Update
