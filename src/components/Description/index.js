import React from 'react'
import "./style.css"

function Description(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Click on the images of the Dota 2 heroes below to earn points, but don't click any more than once!</h1>
                <br></br>
                <br></br>
                <p class="lead">{props.message}</p>
            </div>
        </div>
    )
}

export default Description;