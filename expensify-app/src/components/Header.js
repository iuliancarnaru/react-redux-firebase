import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
);

export default Header;