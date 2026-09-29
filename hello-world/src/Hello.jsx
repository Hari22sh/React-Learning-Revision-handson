import React from "react";

export const Hello = () => {
    return (
        <div id="container">
            <h2>
                Hello, Harish!
            </h2>
        </div>
    );
};

export const HelloWithoutJSX = () => {
    return React.createElement("div",
        { id: "container" },
        React.createElement(
            "h2",
            null,
            "Hello, Harish!"
        )
    );
};