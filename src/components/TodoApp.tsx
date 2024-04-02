import { useState } from "react";

export const TodoApp = () => {
const [task, setTask] = useState("")
const handleAddTask = ()=>{

}
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input 
            type="text" 
            value = {task}
            onChange={(e)=> setTask(e.target.value)}
            placeholder="Nueva Tarea"
            />
            <button
            onClick={handleAddTask}
            ></button>
        </div>
    </div>
  )
}