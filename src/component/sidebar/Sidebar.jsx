import React, { useState } from 'react'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import SwapVertTwoToneIcon from '@mui/icons-material/SwapVertTwoTone';
import HourglassEmptyTwoToneIcon from '@mui/icons-material/HourglassEmptyTwoTone';
import WalletTwoToneIcon from '@mui/icons-material/WalletTwoTone';
import logo from '../../assets/logo.png';



import './Sidebar.css';

function Sidebar() {


  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-log-button'>
          <img className='sidebar-logo' src={logo} alt='logo' />
          <a className='sidebar-toggle-button'><MenuTwoToneIcon /> </a>
        </div>
        <div className='sidebar-menu'>
          <ul className='sidebar-menuLists'>
            <li className='sidebar-menuList '>
              <a className="active-menuList" href='#'>
                <HomeTwoToneIcon />
                <span className='menuName'>Home</span>
              </a>
            </li>
            <li className='sidebar-menuList'>
              <a href='#'>
                <CorporateFareTwoToneIcon />
                <span className='menuName'>Organization</span>
              </a>
            </li>
            <li className='sidebar-menuList'>
              <a href='#'>
                <ViewInArTwoToneIcon />
                <span className='menuName'>Assests</span>
              </a>
            </li>
            <li className='sidebar-menuList'>
              <a href='#'>
                <SwapVertTwoToneIcon />
                <span className='menuName'>Trade</span>
              </a>
            </li>
            <li className='sidebar-menuList'>
              <a href='#'>
                <HourglassEmptyTwoToneIcon />
                <span className='menuName'>History</span>
              </a>
            </li>
            <li className='sidebar-menuList'>
              <a href='#'>
                <WalletTwoToneIcon />
                <span className='menuName'>Wallet</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar