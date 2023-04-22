import './Projects.css'
import i1 from '../imgs/image1.jpg'
import i2 from '../imgs/image2.jpg'
import i3 from '../imgs/tasks.jpg'

const Projects = () => {

    const projectArr = [
        {
            id: 1,
            img: i1,
            title: 'eCommerce Site',
            link: 'https://jelewe.github.io/react-shopping-cart/',
            notes: 'Web Design concept for a furniture store. Developed using functional React.js components, hooks, and Bootstrap. A third party API was implemented to generate product list. Design focus was accessibility and efficiency.'
        },
        {
            id: 2,
            img: i2,
            title: 'Weather Now',
            link: 'https://jelewe.github.io/weather-app/',
            notes: 'Web App developed using vanilla JavaScript, HTML, and CSS. Open Weather API was implemented to fetch real-time data based on user input. Design focus was accessibility and simplicity.'
        },
        {
            id: 3,
            img: i3,
            title: 'To Do Tracker',
            link: 'https://jelewe.github.io/todo-app/',
            notes: 'Web App developed using vanilla JavaScript, HTML, and CSS. Implemented local storage for task continuity across user sessions. Design focus was on accessibility and solidifying core JavaScript fundamentals.'
        }
    ]

    return (
        <div className='projectContainer'>
        {projectArr.map(proj => (
            <div key={proj.id} id= {proj.id} className="projectDiv">
                <img src= {proj.img} alt= {proj.title}></img>
                <div className="projText">
                    <a href={proj.link}><h3>{proj.title}</h3></a>
                    <span>{proj.notes}</span>
                </div>
            </div>
        ))}
        </div>

    )
}

export default Projects;