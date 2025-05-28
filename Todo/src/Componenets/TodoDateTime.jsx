import "./Todo.css";
import { useState, useEffect } from "react";
import { IoCalendarSharp } from "react-icons/io5";
export const TodoDateTime = () => {
     const [dateTime, setDateTime] = useState("");
      useEffect (() => {
       const interval = setInterval(() => {
         const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDateTime(`${formatedDate} - ${formatedTime}`)
       }, 100)
       return () => clearInterval(interval)
 }, [])
    return (
        <>
                <div className="icon">
                    <IoCalendarSharp />
                        <h3>{dateTime} </h3>
                </div>
        </>
    )
}