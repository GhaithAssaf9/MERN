import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const All_Tasks = (props) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">completed property</th>
                    <th scope="col">Change completed property</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.tasks.map( (item, index) => {
                        let x = ""+index;
                        return (
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td id={x} className="aaa">{item.text}</td>
                            <td id="zzz">{item.q ? "True" : "False"}</td>
                            <td> <form> <input type="checkbox" checked={item.q} onChange={e => props.change(index, item)}/> {item.q ? "Not Yet" : "Is it Done?"} </form></td>
                            <td> <button type="button" class="btn btn-danger" onClick={e => props.deletethis(index)}>Delete</button> </td>
                        </tr>
                        )
                    }
                    
                )}
                </tbody>
            </table>
        </div>
    )
}

export default All_Tasks
