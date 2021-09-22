import React from "react";

function Button({title, typeButton}) {
    return (
        <button type={typeButton}>{title}</button>
    )

}

export default Button;