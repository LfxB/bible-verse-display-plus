import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarClassName: "navbar-ul"
        }
    }

    toggleResponsiveMenu = () => {
        const { navbarClassName } = this.state;
        if (navbarClassName === "navbar-ul") {
            this.setState({
                navbarClassName: "navbar-ul responsive"
            })
        } else {
            this.setState({
                navbarClassName: "navbar-ul"
            })
        }
    }

    render = () => {
        const { navbarClassName } = this.state;
        return (
            <ul className={navbarClassName}>
                <li>
                    <Link className="navbar-active" to="/">
                        <i className="material-icons navbar-icon">book</i>
                        Bible Verse Display
                    </Link>
                </li>
                <li>
                    <a href="https://codepen.io/LfxB/full/LQebBx">
                        <i className="material-icons navbar-icon">swap_horiz</i>
                        Old Version
                    </a>
                </li>
                <li className="navbar-menu-button">
                    <button onClick={this.toggleResponsiveMenu}>
                        <i className="material-icons navbar-icon">menu</i>
                    </button>
                </li>
            </ul>
        )
    }
}