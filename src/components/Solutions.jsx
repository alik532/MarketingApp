import React from 'react'
import classes from '../styles/Solutions.module.css'
import solImg1 from '../images/solution1.png'
import solImg2 from '../images/solution2.png'
import solImg3 from '../images/solution3.png'
import ArrowSvg from '../assets/Arrow.svg'

const Solutions = () => {
  return (
    <div className={classes.solutions}>
        <h1 className={classes.title}>Solutions for every need</h1>
        <h4 className={classes.desc}>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</h4>
        <div className={classes.solutionCard}>
            <div className={classes.cardInfo}>
                <h2 className={classes.solutionRole}>
                    Influencer
                </h2>
                <h1 className={classes.solutionName}>
                    Influencer Marketing
                </h1>
                <h5 className={classes.solutionDesc}>
                    Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs
                </h5>
                <a className={classes.more} href='/'>Learn More <img src={ArrowSvg} alt="" /> </a>
            </div>
            <img className={classes.cardImg} src={solImg1} alt="" />
        </div>
        <div className={classes.solutionCard}>
            <div className={classes.cardInfo}>
                <h2 className={classes.solutionRole}>
                    Community
                </h2>
                <h1 className={classes.solutionName}>
                    Community marketing
                </h1>
                <h5 className={classes.solutionDesc}>
                Bring your relationships to new heights with our community product. Discover your biggest enthusiasts
                </h5>
                <a className={classes.more} href='/'>Learn More <img src={ArrowSvg} alt="" /> </a>
            </div>
            <img className={classes.cardImg} src={solImg2} alt="" />
        </div>
        <div className={classes.solutionCard}>
            <div className={classes.cardInfo}>
                <h2 className={classes.solutionRole}>
                    Services
                </h2>
                <h1 className={classes.solutionName}>
                    Managed services
                </h1>
                <h5 className={classes.solutionDesc}>
                    Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling
                </h5>
                <a className={classes.more} href='/'>Learn More <img src={ArrowSvg} alt="" /> </a>
            </div>
            <img className={classes.cardImg} src={solImg3} alt="" />
        </div>
    </div>
  )
}

export default Solutions