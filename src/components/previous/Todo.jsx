import React, {useState} from "react";


const Todo = () => {
    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo.trim() === "") return;

        setTodos([...todos, todo])

        setTodo("")
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    }


  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Simple To-do App</h1>

      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a Task"/>

      <button style={{display:"block", margin: "auto", marginTop: '5px'}} onClick={addTodo}>Add</button>


      <ul>
        {todos.map((task, index) => (
            <li key = {index}>{task} <button onClick={() => deleteTodo(index)}>X</button>
            </li>
        ))}
      </ul>
    </div> 
  )
}

export default Todo
