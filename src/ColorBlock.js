import React from "react"

function ColorBlock(props) {
    return (
        <div className="colorBlock">
            <div className="colorCard" style={{ "backgroundColor": props.color }}>
            </div>
            <div className="propColor">
                <p>{props.color}</p>
            </div>
        </div>
    )
}

export default ColorBlock