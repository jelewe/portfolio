import img from '../imgs/mepor.jpg'

const About = () => {

    return (
        <div className="main">
            <img src= {img} className= "portrait" alt ="woman doing a handstand in front of the ocean" ></img>
            <br />
            <div className="mainText">
                <h1>Hi, I'm Jessie!</h1>
                <span className="intro"> Frontend Developer & UX designer based in Honolulu, Hawaii</span>
                <br />
                <br />
                <span className="obj">I'm passionate about building responsive, user-friendly applications that are visually appealing and highly accessible across multiple platforms.</span>
            </div>
        </div>
    )


}

export default About;