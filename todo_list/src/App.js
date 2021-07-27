import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Add_Task from './combonents/add_task';
import All_Tasks from './combonents/all_tasks';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [task, setTask] = useState([]);
  const addTask = (Rain) => {
    setTask([...task, Rain]);
  }
  const changeState = (index, item) => {
    var arr = task;
    let x = item;
    if(item.q){
      x.q = false;
      arr[index] = x;
      setTask([...arr]);
      var element = document.getElementById(""+index);
      element.className = "aaa";
    }
    else{
      x.q = true;
      arr[index] = x;
      setTask([...arr]);
      var element = document.getElementById(""+index);
      element.className = "www";
    }
    
    
  }

  const delThis = (index) => {
    const result = task.filter((e, x) => x !== index);
    setTask(result);
  }

  return (
    <div className="App">
      <Add_Task addNew={addTask} />
      <All_Tasks tasks={task} change={changeState} deletethis={delThis} />
    </div>
  );
}

export default App;
