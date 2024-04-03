import { Button } from '@mui/material'
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-message'>
                <h1>Hello,&nbsp;
                    <span className='person-name'>Brooklyn Simmons</span>
                </h1>
                <h3>Welcome to&nbsp;
                    <span className='dashbord-name'>Spot trading !</span>
                </h3>
            </div>
            <div className='header-button'>
                <Button className='start-trading-btn' variant='contained' >Start Trading</Button>
            </div>
        </nav>
    )
}

export default Header