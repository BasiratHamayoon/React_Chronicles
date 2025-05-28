import { useEffect, useState } from "react"
import "./Todo.css"
import { FaTrash } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [text, setText] = useState([]);
    const [dateTime, setDateTime] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
        // console.log(inputValue)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() == "") {
            alert("Please enter the Task First!")
        }
        else if(text.includes(inputValue)) {
            alert("This Task is Already exists!")
        } else {
             setText((prev) => [...prev, inputValue]);
        }
        console.log(text)
        setInputValue("")
    }
    //Todo Date and Time
 useEffect (() => {
       const interval = setInterval(() => {
         const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDateTime(`${formatedDate} - ${formatedTime}`)
       }, 100)
       return () => clearInterval(interval)
 }, [])

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
                   <div className="icon">
                     <IoCalendarSharp />
                     <h3>{dateTime} </h3>
                   </div>

                </div>
                <section className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="Input-div">
                            <input type="text"
                            className="todo_input" 
                            autoComplete="off"
                            value={inputValue} 
                            onChange={(event) => handleInputChange (event.target.value)}
                            placeholder="Enter Task" />
                             <div>
                            <button type="submit" className="todo_button">Add Task</button>
                        </div>
                        </div>
                    </form>
                </section>
                <section className="form">
                     <ul className="un-list">
                        {
                            text.map((item, index) => {
                                return(
                                <li key={index}>
                                    <span>{item}</span>
                                     <div className="icons">
                                         <FaCheckCircle  />
                                         <FaTrash onClick={() => handleDeleteTask(item)} />
                                     </div>
                                </li>
                            )})
                        }
                     </ul>
                </section>
                <section>
                    <button onClick={handleDeleteAllTasks} className="clear-btn">Clear All</button>
                </section>
            </section>
            
        </>
    )
}