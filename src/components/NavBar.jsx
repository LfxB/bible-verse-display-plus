import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends React.Component {
    render = () => {
        return (
            <ul className="navbar-ul">
                <li>
                    <Link className="navbar-active" to="/">
                        Bible Verse Display
                    </Link>
                </li>
                <li><a href="https://codepen.io/LfxB/full/LQebBx">Old Version</a></li>
            </ul>
        )
    }
}