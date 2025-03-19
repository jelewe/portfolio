import img from '../imgs/mepor.jpg'
import imgWP from '../imgs/meporWP.webp'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <motion.div className="main"
                            initial={ {opacity: 0 } }
                            animate={ {opacity: 1} }
                            transition={{
                                ease: "easeInOut",
                                duration: 0.6
                            }}
                            exit={ {
                                opacity: 0, 
                                filter: "blur(20px)"
                                } }
            >
            <motion.picture initial={ {
                                        opacity: 0, 
                                        translateY:  -70 
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        translateY: 0 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: 0.3,
                                        ease: "easeInOut"
                                        } }
                                >
                                <source srcSet= {imgWP} type="image/webp" className= "portrait" />
                                <img className= "portrait"  src= {img} alt ="woman doing a handstand in front of the ocean" />
                </motion.picture>
            <br />
            <div className="mainText">
                <h1>Hi, I'm Jessie!</h1>
                <motion.span className="intro"
                                        initial={ {
                                        opacity: 0, 
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: 0.6,
                                        ease: "easeInOut"
                                        } }
                                        > 
                    <b>Frontend-focused Fullstack Developer based in Honolulu, Hawaii</b>
                    </motion.span>
                <br />
                <br />
                <motion.span className="obj"
                                        initial={ {
                                        opacity: 0, 
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: 1,
                                        ease: "easeInOut"
                                        } }
                                        >
                <span>A lifelong nerd who made solving puzzles her career! </span>
                <br/>
                I have production experience in Typescript, React, vanilla JavaScript ES6, Node.js, PHP. I've built and deployed custom components for enterprise-level clients. I'm also no stranger to CMS development, including Drupal, Umbraco, and WordPress. 
                <br />
                I'm interested in contributing to fully remote, autonomous, and fast-paced teams making big visions come to life!
                </motion.span>
            </div>
        </motion.div>
    )


}

export default About;