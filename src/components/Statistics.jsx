import React from 'react'
import classes from '../styles/Statistics.module.css'

const Statistics = () => {
  return (
    <div className={classes.statistics}>
        <h1 className={classes.title}>Search through more than 11 million social media profiles</h1>
        <h4 className={classes.desc}>Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics</h4>
        <div className={classes.info}>
            <div className={classes.stat}>
                <h2 className={classes.statNum}>2217</h2>
                <h5 className={classes.statName}>Satisfied Brands</h5>
            </div>
            <div className={classes.stat}>
                <h2 className={classes.statNum}>1324</h2>
                <h5 className={classes.statName}>Satisfied Clients</h5>
            </div>
            <div className={classes.stat}>
                <h2 className={classes.statNum}>3453</h2>
                <h5 className={classes.statName}>Sponsored</h5>
            </div>
            <div className={classes.stat}>
                <h2 className={classes.statNum}>9017</h2>
                <h5 className={classes.statName}>Completed</h5>
            </div>
        </div>
    </div>
  )
}

export default Statistics