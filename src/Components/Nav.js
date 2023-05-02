import './Nav.css'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {

    const logo = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgb(252, 227, 138, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgb(252, 227, 138, 1)"
        }
    }

    return (
        <header>
        <div className="nav">

            <motion.svg width="68" height="146" viewBox="0 0 68 146" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M19.006 88.946C16.9993 88.946 15.6807 88.086 15.05 86.366L3.44 49.386C3.32533 49.1567 3.06733 48.5833 2.666 47.666C2.322 46.6913 1.892 45.946 1.376 45.43C2.46533 44.3407 3.81267 43.796 5.418 43.796C6.50733 43.796 7.396 44.054 8.084 44.57C8.82933 45.0287 9.31667 45.7167 9.546 46.634L20.124 84.044L29.154 49.214C29.4407 47.8953 29.584 46.978 29.584 46.462C29.584 45.7167 29.4407 45.0573 29.154 44.484C30.4727 43.9107 32.0207 43.624 33.798 43.624C36.1487 43.624 37.6107 44.3693 38.184 45.86L48.246 84.044L57.878 49.214C58.1647 47.7807 58.308 46.8633 58.308 46.462C58.308 45.7167 58.1647 45.0573 57.878 44.484C58.9673 44.0253 60.114 43.796 61.318 43.796C64.0127 43.796 65.3313 44.8567 65.274 46.978C65.274 48.2393 65.016 49.5293 64.5 50.848L52.03 87.828C50.482 88.5733 48.934 88.946 47.386 88.946C46.4113 88.946 45.5227 88.7167 44.72 88.258C43.9747 87.8567 43.4873 87.226 43.258 86.366L33.798 50.934L24.08 87.828C22.532 88.5733 20.8407 88.946 19.006 88.946Z" 
                                        className="item"
                                        variants= {logo}
                                        initial= "hidden"
                                        animate= "visible"
                                        transition= {{
                                            default: { duration: 2, ease: "easeInOut" },
                                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                        }}
                                    />
                <motion.path d="M33.672 33.152C32.264 33.152 31.048 32.672 30.024 31.712C29.064 30.688 28.584 29.472 28.584 28.064C28.584 26.656 29.064 25.472 30.024 24.512C31.048 23.488 32.264 22.976 33.672 22.976C35.08 22.976 36.264 23.488 37.224 24.512C38.248 25.472 38.76 26.656 38.76 28.064C38.76 29.472 38.248 30.688 37.224 31.712C36.264 32.672 35.08 33.152 33.672 33.152ZM23.688 114.272C20.296 114.272 17.736 113.568 16.008 112.16C14.216 110.816 13.32 108.96 13.32 106.592C13.32 105.376 13.704 104.288 14.472 103.328C15.176 102.432 16.232 101.984 17.64 101.984C18.728 101.984 19.528 102.432 20.04 103.328C19.528 104.288 19.272 105.376 19.272 106.592C19.272 108.192 19.72 109.312 20.616 109.952C21.512 110.592 22.568 110.912 23.784 110.912C26.408 110.912 28.136 109.632 28.968 107.072C29.8 104.512 30.216 100.736 30.216 95.744L30.312 54.08C30.312 49.472 29.928 46.016 29.16 43.712C30.44 42.56 31.88 41.984 33.48 41.984C34.76 41.984 35.784 42.368 36.552 43.136C37.384 43.904 37.8 44.96 37.8 46.304L37.896 97.088C37.896 102.016 36.808 106.112 34.632 109.376C32.52 112.64 28.872 114.272 23.688 114.272Z" 
                                        className="item"
                                        variants= {logo}
                                        initial= "hidden"
                                        animate= "visible"
                                        transition= {{
                                            default: { duration: 2, ease: "easeInOut" },
                                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                        }}
                                        />
            </motion.svg>

        <div className="links">
            <NavLink
                    to="/"
                    style={({ isActive }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "underline" : ""
                };
                }}>
                        portfolio
            </NavLink>
            <NavLink
                    to='/about'
                    style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : ""
                    };
                    }}>
                        about
                </NavLink>
                <NavLink
                    to='/contact'
                    style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : ""
                    };
                    }}>
                        contact
                </NavLink>
        </div>
    </div>
    </header>
    )
}

export default Nav;