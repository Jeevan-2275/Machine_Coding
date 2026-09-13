import React,{ useState } from 'react';

const Todo = () => {
    const [todo,setTode] = useState({
        text:"",complted:false,priority:"medium"
    })


    function toggleCompleted(){
        setTodo({...todo,completed:!todo.completed})
    }

    function updatePriority(e){
        setTodo({...todo,priority:e.target.value})
        console.log(todo.priority)
    }



return (
    <div>
        <input type="text" 
        value={todo.text}
        onChange={(e) => setTode({...todo,text:e.target.value})
    }/>
    <input type="checkbox"
    checked={todo.complted}
    onChange={toggleCompleted}
    />
    <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</span>
    <select value={todo.priority} onChange={updatePriority}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    </div>
)


}

export default Todo;