import React from 'react'
import './Header.css'
import {ExpandMore,Dehaze, Language, Search} from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate=useNavigate()
    return (
        <div className="header">
            <div className="header-start">
                <Link to='/'>
                   <img src="Airbnb_Logo.png" alt="LOGO" className="header-icon" />
                </Link>
            </div>
            <div className="header-center">
                <input type="text" placeholder=" search here" />
                <Search className="icons" />
            </div>
            <div className="header-end">
                <span>Become a Host</span>
                <Language/>
            
                    <Button className="header-endLogin" onClick={()=>{
                            navigate('/login')
                    }}>
                        <Dehaze/>
                         <Avatar/>
                    </Button>
            
            </div>
        </div>
    )
}

export default Header
