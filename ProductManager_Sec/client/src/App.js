
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product" />
        <Edit path="/product/edit/:id" />
      </Router>
    </div>
  );
}
export default App;
