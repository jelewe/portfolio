import Projects from "../Components/Projects";

const Portfolio = () => {

    return (
        <div className="main">
            <div className="mainText">
                <span className="intro">Hi, I'm Jessie!</span>
                <h1>Frontend Developer based in Honolulu, Hawaii</h1>
                <span className="obj">I'm passionate about building responsive, user-friendly applications that are visually appealing and highly accessible across multiple platforms.</span>
                <h2>See my projects below...</h2>
            </div>
    
            <Projects />

        </div>
    )


}

export default Portfolio;