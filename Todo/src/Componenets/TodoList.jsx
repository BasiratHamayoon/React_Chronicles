import './Todo.css';
import { FaTrash } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
export const TodoList = ({data, key, handleDeleteTask}) => {
    return (
        <>
            <li key={key}>
                <span>{data}</span>
                <div className="icons">
                    <FaCheckCircle  />
                    <FaTrash onClick={() => handleDeleteTask(data)} />
                </div>
            </li>
        </>
    )
}