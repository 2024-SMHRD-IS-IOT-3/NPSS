import { Link } from 'react-router-dom';
import React from 'react';
import '../Nav.css';

function Nav() {
    return (
        <div>
            <div className='navbar'>
                <Link className='navbarMenu' to={'/'}>Main</Link>
                <div className='navbarMenu' onClick={()=>{
                    sessionStorage.removeItem('user');
                    window.location.href="/login";
                }}>Logout</div>
            </div>
        </div>
    )
}

export default Nav;