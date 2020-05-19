import React from 'react';
import Footer from './Footer';
// import Page from './Page'; 

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactPage">
                <h1>Contact Us</h1>
                <img src="https://lh3.googleusercontent.com/DRxevULBhMhVteSCLk8jr2tHXof460k1_gFEaFnXQILaNCTPjemRoaGmDN6jb3pmCbS2saY=s170" id="logo"></img>
                <h3>
                    1345 East 3900 South Suite #208 
                    <br/>
                    Salt Lake City UT 84124
                </h3>
                <h3>Or, send us your request on the form below & we'll get back to you as soon as possible.</h3>
                <form className="contactForm">
                    <label>Name:</label>
                    <input type="text" className="contactInputs"/>
                    <br/>
                    <label>Address:</label>
                    <input type="text" className="contactInputs"/>
                    <input type="text" className="contactInputs"/>
                    <br/>
                    <div className="cityStateZip">
                        <div className="cityInput">
                            <label>City:</label>
                            <input type="text" className="contactInputs"/>
                        </div>
                        <div className="stateInput">
                            <label>State:</label>
                            <input type="text" className="contactInputs"/>
                        </div>
                        <div className="zipInput">
                            <label>Zip:</label>
                            <input type="text" className="contactInputs"/>
                        </div>
                    </div>
                    <br/>
                    <label>Phone:</label>
                    <input type="text" className="contactInputs"/>
                    <br/>
                    <label>Fax:</label>
                    <input type="text" className="contactInputs"/>
                    <br/>
                    <label>Email:</label>
                    <input type="text" className="contactInputs"/>
                    <br/>
                    <div>
                        <button>Submit</button>
                        <button>Reset</button>
                    </div>
                </form>
                <a href="">About Us |</a>
                <a href=""> Contact Us |</a>
                <a href=""> Services |</a>
                <a href=""> Site Map |</a>
                <a href=""> Epworth Sleepiness Scale</a>
                <Footer />
            </div>
        )
    }
}

export default Contact;