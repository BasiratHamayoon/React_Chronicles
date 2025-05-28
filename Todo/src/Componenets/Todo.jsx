import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { TodoClearAll } from "./TodoClearAll";
export const Todo = () => {
    const [text, setText] = useState([]);
    const handleSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (content.trim() == "") {
            alert("Please enter the Task First!")
        }
        const isTaskMAtched = text.find((currElem) => currElem.content === content);
        if (isTaskMAtched) {
            alert("This Task is ALready Exists!");
        }
        else{
             setText((prev) => [...prev, { id, content, checked }]);
        }
    }
    console.log(text)
 // Delete specific task
 const handleDeleteTask = (value) => {
    console.log(value);
    const deleteTask = text.filter((item) => item.content!== value);
    setText(deleteTask)
}
//Delete All tasks
const handleDeleteAllTasks = () => {
    setText([])
}
//Checked Task
const handleCheckTask = (content) => {
    const updatedTask = text.map((item) =>  {
        if (item.content === content) {
            return {...item, checked: !item.checked};
        } else {
            return item
        }
    });
     setText(updatedTask);
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
                            text.map((item) => {
                                return(
                                 <TodoList data={item.content}
                                  key={item.id}
                                  handleDeleteTask={handleDeleteTask}
                                  handleCheckTask = {handleCheckTask}
                                  checked = {item.checked}/>
                            )})
                        }
                     </ul>
                </section>
                <TodoClearAll handleDeleteAllTasks= {handleDeleteAllTasks}/>
            </section>
            
        </>
    )
}