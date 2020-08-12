import React from "react"
import "./style.css"

function Image(props) {
    return (
        <div className="imgContainer">
            <div className="col m4 s3 l6">
                <div className="card" id={props.id}>
                    <div className="card-image">
                        <img onClick={props.onClick} src={require(`${props.url}`)} alt="placeholder" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image