import React from 'react';
import './../styles/Contact.css';
import email_logo from "./../img/email_logo.png"
import phone_logo from "./../img/phone_logo.png"
import linkedin_logo from "./../img/linkedin_logo.png"
import github_logo from "./../img/github_logo.png"

class Contact extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="contactBody">
                <h1>Contact</h1>
                <div className="withText">
                    <img alt="" src={email_logo}/>
                    <a href="mailto:hanna.petersson.2001@gmail.com" className="email-link">
                        hanna.petersson.2001@gmail.com
                    </a>
                </div>
                <div className="withText">
                    <img alt="" src={phone_logo}/>
                    <p>+46707785466</p>
                </div>
                <div className="withText" style={{cursor:'pointer'}} title="Visit LinkedIn profile" onClick={function(){  window.open("https://www.linkedin.com/in/hanna-petersson-0aa0a0201/");}}>
                    <img alt="" src={linkedin_logo}/>
                    <p>Hanna Petersson</p>
                </div>
                <div className="withText" style={{cursor:'pointer'}} title="Visit GitHub profile" onClick={function(){  window.open("https://github.com/hannapet123");}}>
                    <img alt="" src={github_logo}/>
                    <p>Hanna Petersson</p>
                </div>
            </div>
        );
    }
}

export default Contact;