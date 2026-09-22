import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";

function Todo() {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");    
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };
    useEffect (() =>{
        getTodos();
    },[])


    const addTodo = async () => {
        try{
            if(!title || ! priority){
                alert("Both are required");
                return;
            }
            await axios.post("http://localhost:3000/todos",{
                id: Date.now(),
                title,
                priority}

            )
            setTitle("");
            setPriority("");
            getTodos();
        }catch(error){
            console.log("error in position",error);
        }
    }

    const deleteTodo = async(id) => {
        try{
            axios.delete(`http://localhost:3000/delete/todos/${id}`)
            getTodos()
        }catch(error){
            console.log("error in delete",error);
        }
    }

    const updateStatus = async(id,newStatus) => {
        try{
            await axios.put(`http://localhost:3000/update/todos/${id}`,{
                status:newStatus
            })
            getTodos();
        }catch(error){
            console.log("error  in update",error);
        }
    }


return (
    <div style={{padding:"20px"}}>
        <h2>Todo App</h2>

        <div style={{display:"flex"}}>
            {/* <form action=""> */}
                <input type="text"
                value={title}
                placeholder='Todo Title'
                onChange={(e)=>setTitle(e.target.value)}
                />
                <select  
                onChange={(e)=>setPriority(e.target.value)}
                >
                    <option value="">Select the Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button  onClick={addTodo}>Add Todo</button>
            {/* </form> */}
        </div>

 <ul className="todo-list">
  {todos.map(item => (
    <li key={item.id} className="todo-item">
  <span className="title">{item.title}</span>
      <span className="title">Status:{item.status}</span>
      <span className="priority">Priority: {item.priority}</span>
      
        <select
        value={item.status}
        onChange={(e)=>updateStatus(item.id,e.target.value)}
        >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>

      <button onClick={()=>deleteTodo(item.id)}>Delete</button>
    </li>
  ))}
</ul>



      
    </div>
  )
}

export default Todo