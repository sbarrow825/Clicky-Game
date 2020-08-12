import React from 'react'

function Navbar(props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a class="navbar-brand">Clicky Game</a>
                </div>
                <h1 class="nav navbar-nav navbar-right">
                   Score: {props.score}
                </h1>
            </div>
        </nav>
    )
}

export default Navbar;