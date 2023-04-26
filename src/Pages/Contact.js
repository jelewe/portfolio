import gh from '../imgs/github.svg'
import email from '../imgs/email-outline.svg'

const Contact = () => {


    return (
        <div className="main">
        <h1>Get in Touch</h1>
            <div className="contactDiv">
                
                <span><img src= {gh} alt= "github logo" /> Find me on GitHub <a href="https://github.com/jelewe">@jelewe</a></span>
                <br />
                <span><img src= {email} alt= "email icon" /> Email me at <a href="mailto:hire.jesslw@gmail.com?subject=Portfolio Inquiry">hire.jesslw@gmail.com</a></span>
            
            </div>
           
        </div>
    )


}

export default Contact;