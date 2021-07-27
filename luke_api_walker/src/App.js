import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { navigate } from '@reach/router'
import axios from 'axios';
import People from './components/people';
import Planets from './components/planets';
import { Router } from '@reach/router';

function App() {
  const [id, setId] = useState(0);
  const [option, setOption] = useState("");

  const handleOptions = (e) => {
    setOption(e.target.value);
  }

  const handleId = (e) => {
    setId(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(option === "People"){
      navigate('/people/'+id)
    }
    else if(option === "Planets"){
      navigate('/planets/'+id)
    }
    else {
      navigate('/');
    }

  }

  return (
    <div className="App">
      <section>
        <form onSubmit={handleSubmit} >
          <span> Searsh For: </span>
          <select onChange={handleOptions} >
            <option selected> Choose your Topic ... </option>
            <option value="People">People</option>
            <option value="Planets">Planets</option>
          </select>
          <tr />
          <span> ID : </span>
          <input type="number" value={id} onChange={handleId} />
          <input type="submit"/>
        </form>
      </section>
      <br />
      <br />
      <Router>
        <People path="people/:id" id={id} />
        <Planets path="planets/:id" id={id} />
      </Router>
    </div>
  );
}

export default App;