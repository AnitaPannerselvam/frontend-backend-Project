
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import "./Navbar.css";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className='navbar'>
            <h3 className='task'>TASKS</h3>
            <ul className={isMobile ? 'nav-links-mob' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
                {/* <Link to="/contact" className='contact'>
                    <li>ContactUs</li>
                </Link> */}
                {/* <Link to="/tasks" className='tasks'>
                    <li>Tasks</li>
                </Link> */}
                {!isLoggedIn && (
                    <li>
                        <button className='signup-button'>
                            <Link to="/signup" className='signup'>
                               REGISTER
                            </Link>
                        </button>
                    </li>
                )}
                <li className='user-icon-container'>
                    {isLoggedIn ? (
                        <div className='user-dropdown-container'>
                            <FontAwesomeIcon 
                                icon={faUser} 
                                className='user-icon' 
                                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} 
                            />
                            {isUserDropdownOpen && (
                                <ul className='user-dropdown'>
                                    <li>{user.name}</li>
                                    <li onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link to="/signin">
                            <FontAwesomeIcon 
                                icon={faUser} 
                                className='user-icon' 
                            />
                        </Link>
                    )}
                </li>
                {/* <li className='admin-icon-container'>
                    <FontAwesomeIcon 
                        icon={faUserShield} 
                        className='admin-icon' 
                        onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)} 
                    />
                    {isAdminDropdownOpen && (
                        <ul className='admin-dropdown'>
                            <Link to="/admin" className='admin-link'>
                                <li>Admin</li>
                            </Link>
                            <Link to="/user" className='admin-link'>
                                <li>User</li>
                            </Link>
                        </ul>
                    )}
                </li> */}
            </ul>
            <button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
        </nav>
    );
};

export default Navbar;
