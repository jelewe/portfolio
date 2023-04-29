import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location= {location} key={location.pathname}>
                <Route path = "/" element= {<Portfolio />} />
                <Route path = "/about" element= {<About />} />
                <Route path = "/contact" element= {<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes