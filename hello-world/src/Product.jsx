export const Product = (props) => {
    return (
        <div>
            <h3>Product: {props.name}</h3>
            <p>Price: ${props.price}</p>
            <p>Id: {props.id}</p>
            <p>Categories: {props.categories.join(", ")}</p>
        </div>
    )
}