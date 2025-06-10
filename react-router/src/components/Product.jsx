import { NavLink } from "react-router-dom"

export const Product = () => {
    const id = '123'
    return (
        <>
        <h1>Profile Card</h1>
        <NavLink to={`/productdetail/${id}`} >
            <button>Show card</button>
        </NavLink>
        </>
    )
}