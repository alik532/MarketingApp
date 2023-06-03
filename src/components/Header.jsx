import React from 'react'
import classes from '../styles/Header.module.css'
import Logo from '../assets/Logo.svg'
import { useState } from 'react'

const Header = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div className={classes.header}>
      <img src={Logo} alt="" />
      <div className={classes.navbar}>
        <a href="/" className={classes.link}>Solutions</a>
        <a href="/" className={classes.link}>Plans</a>
        <a href="/" className={classes.link}>Resource</a>
        <a href="/" className={classes.link}>Blog</a>
      </div>
      <a href="/" className={classes.demoButton}>Request Demo</a>
      {menu ? <div className={classes.exitMenu} onClick={() => setMenu(false)}>X</div> : <div className={classes.menuButton} onClick={() => setMenu(prev => !prev)}>MENU</div>}
      <div className={classes.menu} style={{display: menu ? "flex" : "none"}}>
        <a href="/" className={classes.link}>Solutions</a>
        <a href="/" className={classes.link}>Plans</a>
        <a href="/" className={classes.link}>Resource</a>
        <a href="/" className={classes.link}>Blog</a>
        <a href="/" className={classes.demoButtonM}>Request Demo</a>
      </div>
    </div>
  )
}

export default Header