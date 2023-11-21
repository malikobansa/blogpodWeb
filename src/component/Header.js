import React from 'react'
import './header.css'
import { IoMdNotificationsOutline } from "react-icons/io"



function Header() {
  return (
    <div className='container'>
        <h1><span className='blog'>Blog</span>Pod📰🗞️</h1>
        
   
       <IoMdNotificationsOutline size={50} style={{marginLeft:1000}}/>
    </div>
  )
}

export default Header