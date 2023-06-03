import React from 'react'
import classes from '../styles/HappyClients.module.css'
import manImg from '../images/man.png'
import fImg from '../images/fImg.png'

const HappyClients = () => {
  return (
    <div className={classes.happyClients}>
        <h1 className={classes.title}>Happy Clients</h1>
        <h4 className={classes.desc}>The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes</h4>
        <div className={classes.content}>
            <div className={classes.left}>
                <img src={fImg} alt="" className={classes.circle}/>
                <h3 className={classes.quote}>
                Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.
                </h3>
                <h4 className={classes.name}>Rowhan Smith</h4>
                <h6 className={classes.position}>CEO, Foreclosure</h6>
            </div>
            <img src={manImg} alt="" className={classes.man}/>
        </div>
    </div>
  )
}

export default HappyClients