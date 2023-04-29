import gh from '../imgs/github.svg'
import email from '../imgs/email-outline.svg'
import { motion } from 'framer-motion'

const Contact = () => {


    return (
        <motion.div className="main"
                            initial={ {opacity: 0} }
                            animate={ {opacity: 1} }
                            exit={ {
                                opacity: 0, 
                                filter: "blur(20px)",
                                transition: { duration: 0.3, ease: "easeInOut"}
                                } }
            >
            <h1>Get in Touch</h1>
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
                                        >
                        <img src= {gh} 
                                  alt= "github logo" 
                                  /> 
                                  Find me on GitHub <a href="https://github.com/jelewe">
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
                                        delay: 0.5,
                                        ease: "easeInOut"
                                        } }
                                        >
                        <img src= {email} 
                                alt= "email icon"
                                /> 
                                Email me at <a href="mailto:hire.jesslw@gmail.com?subject=Portfolio Inquiry">
                                     hire.jesslw@gmail.com
                                    </a>
                                </motion.span>
                
                </div>
           
        </motion.div>
    )


}

export default Contact;