import React from 'react'
import { NavLink } from 'react-router-dom'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export function Header() {
    return <nav className="main-header ">
        <div className="main-container-header flex space-between align-center">
            <NavLink
                className="logo flex align-center"
                exact to='/'>
                <EmojiPeopleIcon />
            Mister
            <span>Tasker</span>
            </NavLink>
            <ul className="nav-list clean-list flex">
                <li><NavLink to='/task'>Your tasks | </NavLink></li>
                <li><NavLink to='/task'>About</NavLink></li>
            </ul>
        </div>
    </nav>
}

