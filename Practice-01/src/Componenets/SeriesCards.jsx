export const SeriesCards = (props) => {
    return (
        <>
            <li>
                <img src={props.item.image} alt={props.item.name} />
                <h1>Name: {props.item.name}</h1>
                <p>Description: {props.item.description}</p>
            </li>
        </>
    )
}