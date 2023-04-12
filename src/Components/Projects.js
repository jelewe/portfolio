import './Projects.css'
import i1 from '../imgs/image1.jpg'

const Projects = () => {

    const projectArr = [
        {
            id: 1,
            img: i1,
            title: 'eCommerce Site',
            link: 'https://jelewe.github.io/react-shopping-cart/',
            notes: 'Web Design concept for a furniture store. Developed using functional React.js components, hooks, and Bootstrap. A third party API was implemented to generate product list. Design focus was accessibility and efficiency.'
        }
    ]

    return (
        <div>
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