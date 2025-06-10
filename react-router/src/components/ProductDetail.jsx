import { useParams } from "react-router-dom"

export const ProductDetail = () => {
    const { id } = useParams();
    return (
        <>
        <h1>Details of ID {id}</h1>
        </>
    )
}