import React from "react"

function Image(props) {
    return (
        <div className="col m4">
            <div className="card" id={props.id}>
                <div className="card-image">
                    <img onClick={props.onClick} src={require(`${props.url}`)} alt="placeholder"/>
                </div>
            </div>
        </div>
    )
}

export default Image