export const SeriesCards = (props) => {
    const {id, name, description, image} = props.item;
    return (
        <>
            <li key={id}>
                <img src={image} alt={name} />
                <h1>Name: {name}</h1>
                <p>Description: {description}</p>
            </li>
        </>
    )
}