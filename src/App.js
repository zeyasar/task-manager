import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  }


  const addTask = (newTask)=>{
    const id = uuidv4();
    const addNewTask = {...newTask, id}
    setTasks([...tasks, addNewTask])
  }

  const toggleDone = (toggleDoneId) => {
    setTasks(tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone} : task ))
  }

  const toggleShow = () => setshowAddTask(!showAddTask)

  return (
    <div className="container">
      <Header toggleShow={toggleShow} showAddTask={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>) : (<h2 style={{textAlign:'center'}}> NO TASK TO SHOW</h2>)
      }
      
    </div>
  );
}

export default App;
