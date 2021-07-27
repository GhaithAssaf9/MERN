import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './components/tabs';
import Tabs_Form from './components/tabs_form';
import {useState} from 'react'

function App() {

  const [tabs, setTabs] = useState([{name:"Ghaith", comment:"Hello"}]);
  const add = (x) => {
    setTabs([...tabs, x]);
  }
  return (
    <div className="App">
      <Tabs_Form addTabs={add} />
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
