import Projects from "../Components/Projects";
import { motion } from 'framer-motion'

const Portfolio = () => {

    return (
        <motion.div className="main"
                            initial={ {opacity: 0} }
                            animate={ {opacity: 1} }
                            exit={ {
                                opacity: 0, 
                                filter: "blur(20px)",
                                transition: { duration: 0.25, ease: "easeInOut"}
                                } }
            >
        
    
            <Projects />

        </motion.div>
    )
}

export default Portfolio;