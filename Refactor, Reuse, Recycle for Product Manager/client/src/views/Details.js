import React from 'react'
import Show_This from '../components/Show_This'


const Details = (props) => {
    return (
        <div>
            <Show_This id={props.id} />
        </div>
    )
}

export default Details
