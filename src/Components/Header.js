import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
<>
<img class="ui fluid image" src="https://raw.githubusercontent.com/rbeedub/GLOAT/608e4e65549a11c06fba5091222c1bba7b79d111/Black%20Marble%20Elegant%20Professional%20LinkedIn%20Banner.svg"/>
    
    <div class="ui fluid five item text menu">

        <Link class="header item"  to="/">
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

</>
)
};

export default Header;