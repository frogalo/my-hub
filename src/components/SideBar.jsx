import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/profile">Profile</Link>
                </li>
                {/* Add more sidebar items based on your routes */}
            </ul>
        </nav>
    );
};

export default SideBar;
