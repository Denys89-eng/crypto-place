import React from "react";
import { Typography, Avatar} from 'antd'
import {Link} from "react-router-dom";

const NavBar = () => {

    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto-place</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

export default NavBar