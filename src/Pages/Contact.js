import gh from '../imgs/github.svg'
import email from '../imgs/email-outline.svg'
import { motion } from 'framer-motion'

const Contact = () => {

    const line = {
        hidden: {
            opacity: 0,
            pathLength: 1,
        },
        visible: {
            opacity: 1,
            pathLength: 0,
        }
    }


    return (
        <div className="main"
            >
            <h1>Get in Touch</h1>
            <motion.svg height="15"
                                initial="visible"
                                animate="hidden">
                <motion.line className= "line"
                                    x1="10" y1="10" x2="330" y2="10"
                                    stroke="rgb(252, 227, 138)"
                                    variants={line}
                                    transition= {{
                                            default: { duration: 2, ease: "easeInOut" },
                                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                        }} 
                                        />
            </motion.svg>
                <div className="contactDiv">
                    
                    <motion.span initial={ {
                                        opacity: 0, 
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: 0.4,
                                        ease: "easeInOut"
                                        } }
                                        className= "contactItem"
                                        >
                        <img src= {gh} 
                                  alt= "github logo" 
                                  />  Find me on GitHub <a href="https://github.com/jelewe">
                                    @jelewe
                                    </a>
                                  </motion.span>
                    <br />
                    <motion.span initial={ {
                                        opacity: 0, 
                                        translateX: 500,
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        translateX: 0 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: 0.7,
                                        ease: "easeInOut"
                                        } }
                                        className= "contactItem"
                                        >
                        <img src= {email} 
                                alt= "email icon"
                                /> 
                                Email me at <a href="mailto:hire.jesslw@gmail.com?subject=Portfolio Inquiry">
                                     hire.jesslw@gmail.com
                                    </a>
                                </motion.span>
                
                </div>
           
        </div>
    )


}

export default Contact;