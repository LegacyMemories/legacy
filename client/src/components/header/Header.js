import React from 'react';
import SiteNav from './SiteNav';
import LogoNav from './LogoNav';

function Header() {
    return (
        <header>   
            <LogoNav/>
            <SiteNav/>
        </header>
    )
}

export default Header;