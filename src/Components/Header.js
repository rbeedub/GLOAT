import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
<>
    <div class="ui inverted menu">
        <Link class="active item"  to="/">
        Home
        </Link>
        <Link class="item" to="/jordans">
        Jordans
        </Link>
        <Link class="item" to="/about">
        About
        </Link>
        <Link class="item" to="/jordans/favorites">
        Want
        </Link>
        <Link class="item" to="/jordans/form">
        Sell
        </Link>
    </div>
        <h1 class="ui huge header"> G L O A T </h1>
</>
)
};

export default Header;