import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { TodoClearAll } from "./TodoClearAll";
export const Todo = () => {
    const [text, setText] = useState([]);
    const handleSubmit = (inputValue) => {
        if (inputValue.trim() == "") {
            alert("Please enter the Task First!")
        }
        else if(text.includes(inputValue)) {
            alert("This Task is Already exists!")
        } else {
             setText((prev) => [...prev, inputValue]);
        }
        console.log(text)
    }
 // Delete specific task
 const handleDeleteTask = (value) => {
    console.log(value);
    const deleteTask = text.filter((item) => item!== value);
    setText(deleteTask)
}
//Delete All tasks
const handleDeleteAllTasks = () => {
    setText([])
}
    return (
        <>
            <section className="section">
                <header>
                    <h1>Todo List</h1>
                </header>
                <div className="calender">
                    <TodoDateTime />               
                </div>
                <TodoForm  onAddTodo={handleSubmit} />
                <section className="form">
                     <ul className="un-list">
                        {
                            text.map((item, index) => {
                                return(
                                 <TodoList data={item} key={index} handleDeleteTask={handleDeleteTask}/>
                            )})
                        }
                     </ul>
                </section>
                <TodoClearAll handleDeleteAllTasks= {handleDeleteAllTasks}/>
            </section>
            
        </>
    )
}