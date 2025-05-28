import './Todo.css'
export const TodoClearAll = ({handleDeleteAllTasks}) => {
    return (
        <>
            <section>
                <button onClick={handleDeleteAllTasks} className="clear-btn">Clear All</button>
            </section>
        </>
    )
}