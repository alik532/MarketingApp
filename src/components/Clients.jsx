import React from 'react'
import classes from '../styles/Clients.module.css'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'

const Clients = () => {
  return (
    <div className={classes.clients}>
        <h2 className={classes.title}>SOME OF OUR TRUSTED CLIENTS</h2>
        <div className={classes.list}>
            <img src={client1} alt="" className={classes.client}/>
            <img src={client5} alt="" className={classes.client}/>
            <img src={client3} alt="" className={classes.client}/>
            <img src={client2} alt="" className={classes.client}/>
            <img src={client4} alt="" className={classes.client}/>
        </div>
    </div>
  )
}

export default Clients