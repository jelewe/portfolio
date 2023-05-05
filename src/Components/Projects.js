import './Projects.css'
import i1 from '../imgs/image1.jpg'
import i1wp from '../imgs/image1WP.webp'
import i2 from '../imgs/image2.jpg'
import i2wp from '../imgs/image2WP.webp'
import i3 from '../imgs/task.jpg'
import i3wp from '../imgs/taskWP.webp'
import { motion } from 'framer-motion'

const Projects = () => {



    const projectArr = [
        {
            id: 1,
            img: i1,
            wp: i1wp,
            title: 'eCommerce Site',
            link: 'https://jelewe.github.io/react-shopping-cart/',
            notes: <span>Web Design concept for an eCommerce store. Developed using functional <code>React.js</code> components, hooks, <code>Bootstrap</code>, <code>HTML</code>, and <code>CSS</code>. A third party API was implemented to generate product images, names, and descriptions. Design focus was accessibility and efficiency.</span>
        },
        {
            id: 2,
            img: i2,
            wp: i2wp,
            title: 'Weather Now',
            link: 'https://jelewe.github.io/weather-app/',
            notes: <span>Web App developed using vanilla <code>JavaScript</code>, <code>HTML</code>, and <code>CSS</code>. Open Weather API was implemented to fetch real-time data based on user input. Design focus was accessibility and simplicity.</span>
        },
        {
            id: 3,
            img: i3,
            wp: i3wp,
            title: 'To Do Tracker',
            link: 'https://jelewe.github.io/todo-app/',
            notes: <span>Web App developed using vanilla <code>JavaScript</code>, <code>HTML</code>, and <code>CSS</code>. Implemented local storage for task continuity across user sessions. Design focus was on accessibility and solidifying core JavaScript fundamentals.</span>
        }
    ]


    return (

        
        <div className='projectContainer'
                initial="hidden"
                animate="show"
                >
            {projectArr.map((proj, i) => (
                <motion.div key={proj.id} 
                                    id= {proj.id} 
                                    className="projectDiv"
                                    initial={ {
                                        opacity: 0, 
                                        translateX: i % 2 === 0 ? -500  : 500,
                                        } }
                                    animate={ {
                                        opacity: 1, 
                                        translateX: 0 
                                        } }
                                    transition= { { 
                                        duration: 0.7, 
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                        } }
                                    >
                    <a href={proj.link}>
                    <picture>
                        <source srcSet= {proj.wp} type="image/webp" />
                        <img src= {proj.img} 
                                    alt=  {`Link to ${proj.title}`}
                                    />

                    </picture>
                        
                    </a>
                    <div className="projText">
                        <a href={proj.link}><h3>{proj.title}</h3></a>
                        <span>{proj.notes}</span>
                    </div>
                </motion.div>
            ))}
        </div>


    )
}

export default Projects;