import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        console.log(json)
        console.log(res.body)
        setTodos(json.todos);
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);
      });
  }, []); // Empty dependency array => run only once

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />

    </div>
  );
}

export default App;
