import React from 'react'
import { navigate } from '@reach/router'

const UpdateButton = (props) => {

    const updateThis = (id) => {
        navigate("/update/"+id);
    }

    return (
        <button type="button" class="btn btn-warning" onClick={e => {updateThis(props.id)}}>
            Update
        </button>
    )
}

export default UpdateButton
