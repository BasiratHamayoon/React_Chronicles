import './Todo.css';
import { FaTrash } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
export const TodoList = ({data, handleCheckTask, handleDeleteTask, checked}) => {
    return (
        <>
            <li className='todoItem'>
                <span className={checked ? "decor" : "not_decore"}>{data}</span>
                <div className="icons">
                    <FaCheckCircle  className={checked ? "check" : ""} onClick={() => handleCheckTask(data)}/>
                    <FaTrash onClick={() => handleDeleteTask(data)} />
                </div>
            </li>
        </>
    )
}