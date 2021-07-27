import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Add_Task = (props) => {
    const [text, setText] = useState("");
    const [q, setQ] = useState(false);

    const handleTask = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({text, q});
        setText("");
        setQ(false);
    }

    return (
        <section>
            <form class="form-inline" onSubmit={handleSubmit}>
            <div class="form-group mb-2">
                <h2>Add New Task </h2>
            </div>
                <div class="form-group mx-sm-3 mb-2">
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Task ..." onChange={handleTask} />
                </div>
                <input type="hidden" value={false} />
                <button type="submit" class="btn btn-primary mb-2">Add Task</button>
            </form>
        </section>
    )
}

export default Add_Task
