export const OnlineStatus = ({ name, isOnline, hideOffline }) => {
    if (hideOffline && !isOnline) return null;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Online Status: {isOnline ? "Online" : "Offline"}</p>
            <p>{isOnline ? "Available for chat!" : "Will get back to you soon!"}</p>
            {
                isOnline ?
                    (
                        <button>Send the message</button>
                    ) :
                    (
                        <small>Check later!</small>
                    )
            }
        </div>
    );
}
