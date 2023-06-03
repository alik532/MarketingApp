import React from 'react'
import classes from '../styles/Subscribe.module.css'
import heroBackground from '../images/hero.png'
import arrow from '../assets/Arrow.svg'

const Subscribe = () => {
  return (
    <div className={classes.subscribe} style={{backgroundImage: `url(${heroBackground})`}}>
        <h1 className={classes.title}>Subscribe our newsletter</h1>
        <h4 className={classes.desc}>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</h4>
        <button className={classes.button}>Subscribe <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Subscribe