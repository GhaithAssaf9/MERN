import React, {useState} from 'react'
import { NavItem } from 'react-bootstrap';

const Tabs = (props) => {
    const [comm, setComm] = useState("");
    const setCo = (x) => {
        setComm(x);
    }

    let x = props.tabs;
    let arr = [];
    return (
        <div className="ttt">
        <ul class="nav nav-tabs">
            {
                x.map(
                    (item, index)=> {
                        if(comm === item.comment){
                            arr.push(<li class="nav-item"><button class="nav-link active" onClick={e => setComm(item.comment)} > {item.name} </button></li>)
                        }
                        else {
                            arr.push(<li class="nav-item"><button class="nav-link" onClick={e => setComm(item.comment)} > {item.name} </button></li>)
                        }
                    }
                )
            }
            {arr}
            </ul>
            <section className="content">
            <h3> Content </h3>
                <p> {comm} </p>
            </section>
        </div>
    )
}

export default Tabs
