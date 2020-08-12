import React from 'react'

function Navbar(props) {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <h1 className="nav navbar-nav navbar-left" >Dota 2 Memory Game</h1>
                </div>
                <h1 className="nav navbar-nav navbar-right">
                   Score: {props.score}
                </h1>
            </div>
        </nav>
    )
}

export default Navbar;