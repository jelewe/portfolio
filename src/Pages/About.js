import img from '../imgs/mepor.jpg'
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
            <motion.img src= {img} 
                                className= "portrait" 
                                alt ="woman doing a handstand in front of the ocean" 
                                initial={ {
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
                                />
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
                    Frontend Developer & UX designer based in Honolulu, Hawaii
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
                I'm passionate about building responsive, user-friendly applications that are visually appealing and highly accessible across multiple platforms.
                </motion.span>
            </div>
        </motion.div>
    )


}

export default About;