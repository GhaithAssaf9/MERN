import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllProduct from './views/AllProduct';
import Details from './views/Details';
import Edit from './views/Edit';



function App() {
  return (
    <div className="App">
       {}
      <Router>
       
        <AllProduct default path="/product" />
        <Details path="/product/:id" />
        <Edit path="/product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
