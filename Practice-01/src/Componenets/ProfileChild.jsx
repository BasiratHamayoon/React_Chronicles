export const ProfileChild = (props) => {
    const {name, age, children} = props;
    return (
        <>
             <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
                <p>{children}</p>
             </div>
        </>
    )
}