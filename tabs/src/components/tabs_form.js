import React, {useState} from 'react'

const Tabs_Form = (props) => {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTabs({name, comment});
        setName("");
        setComment("");
    }

    return (
        <section className="awsform">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col">
                            <input class="form-control" placeholder="Name" type="text" id="color" onChange={handleName} />
                        </div>
                        <div class="col">
                            <textarea class="form-control" placeholder="Comment ..." id="exampleFormControlTextarea1" rows="3" onChange={handleComment}></textarea>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary">Add Box</button>
                        </div>
                    </div>
                </form>
            </section>
    )
}

export default Tabs_Form
