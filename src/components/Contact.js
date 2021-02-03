import React from 'react';
import Footer from './Footer';
import brain from './images/brainLogo.png';
// import Page from './Page'; 

function Contact() {
    return(
        <div className="contactPage">
            <h1>Contact Us</h1>
            <br/>
            <img src={brain} id="logo" alt="brain logo"></img>
            <br/>
            <br/>
            <h3>
                1345 East 3900 South Suite #208 
                <br/>
                Salt Lake City UT 84124
            </h3>
            <br/>
            <h3>If you would like more information or if you want to schedule an appointment, please give us a call</h3>
            <h3>(801) 281-1788</h3>
            <br/>
            <br/>
            <h3>IF THIS IS A MEDICAL EMERGENCY, PLEASE CALL 911</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export default Contact;