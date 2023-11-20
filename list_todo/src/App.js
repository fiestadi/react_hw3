
import { useState,useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [title, setTitle]= useState("");
  const[todos,setTodos] = useState([]);
  
  // localstorage smotrim dannie
  
  useEffect(() => {
    const feelTodos = JSON.parse(localStorage.getItem('todos'));
    if (feelTodos) {
      setTodos(feelTodos);
    }
  }, []);
// sochanie dannich s localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleChange(event) {
   setTitle(event.target.value);
  }
   function addTodo(){
    title &&
    setTodos([
      ...todos,
      {id: Math.floor(Math.random()),
         title,
      },
    ]);
  
setTitle('');
}
  return (
    <div className='container'>
  
    <div className='background'>
    <h1 className='content'>Todo App</h1>
    <div>
      <input value={title} type="text" onChange={(event) => handleChange(event)} />
      <button onClick={addTodo} >Add todo</button>
    </div>

    </div>
    <TodoList  todos={todos}/>
    </div>
  );
}

export default App;
