import "./Todo.css"
import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
      const [inputValue, setInputValue] = useState("");

       const handleInputChange = (value) => {
        setInputValue(value);
        // console.log(inputValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
         setInputValue("")
    }
    return (
        <>
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
        </>
    )
}