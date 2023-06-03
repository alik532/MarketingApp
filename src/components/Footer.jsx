import React from 'react'
import classes from '../styles/Footer.module.css'
import Logo from '../assets/Logo.svg'
import instaLogo from '../assets/insta.svg'
import twitterLogo from '../assets/twitter.svg'
import facebookLogo from '../assets/facebook.svg'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.footer}>
            <img src={Logo} alt="" className={classes.logo}/>
            <div className={classes.navbar}>
                <a href="/" className={classes.link}>Solutions</a>
                <a href="/" className={classes.link}>Plans</a>
                <a href="/" className={classes.link}>Resource</a>
                <a href="/" className={classes.link}>Blog</a>
            </div>
            <div className={classes.contacts}>
                <img src={instaLogo} alt="" className={classes.contact}/>
                <img src={twitterLogo} alt="" className={classes.contact}/>
                <img src={facebookLogo} alt="" className={classes.contact}/>
            </div>
        </div>
        <hr />
        <h6 className={classes.copyright}>Copyright © 2020 Besnik</h6>
    </div>
  )
}

export default Footer