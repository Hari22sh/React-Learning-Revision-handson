export const CardWrapper = (props) => {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px" }}>
            {props.children}
        </div>
    )
}