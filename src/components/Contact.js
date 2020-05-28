import React from 'react';
import Footer from './Footer';
import brain from './images/brainLogo.png';
// import Page from './Page'; 

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div className="contactPage">
                <h1>Contact Us</h1>
                <img src={brain} id="logo"></img>
                <h3>
                    1345 East 3900 South Suite #208 
                    <br/>
                    Salt Lake City UT 84124
                </h3>
                <h3>Or, send us your request on the form below & we'll get back to you as soon as possible.</h3>
                <form className="contactForm" onSubmit={this.submitForm} action="https://formspree.io/xoqkedya" method="POST">
                    <label>Name:</label>
                    <input type="text" className="contactInputs" name="name" required/>
                    <br/>
                    <label>Address:</label>
                    <input type="text" className="contactInputs" name="address1" required/>
                    <input type="text" className="contactInputs" name="address2"/>
                    <br/>
                    <div className="cityStateZip">
                        <div className="cityInput">
                            <label>City:</label>
                            <input type="text" className="contactInputs" name="city" required/>
                        </div>
                        <div className="stateInput">
                            <label>State:</label>
                            <input type="text" className="contactInputs" name="state" required/>
                        </div>
                        <div className="zipInput">
                            <label>Zip:</label>
                            <input type="text" className="contactInputs" name="zipCode" required/>
                        </div>
                    </div>
                    <br/>
                    <label>Phone:</label>
                    <input type="text" className="contactInputs" name="phone" required/>
                    <br/>
                    <label>Fax:</label>
                    <input type="text" className="contactInputs" name="fax"/>
                    <br/>
                    <label>Email:</label>
                    <input type="text" className="contactInputs" name="_replyto" required/>
                    <br/>
                    <textarea rows="10" cols="60" name="message" required></textarea>
                    <br/>
                    <br/>
                    <div>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit" value="Send" className="submitButton">Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </div>
                </form>
                <br/>
                <br/>
                <Footer />
            </div>
        )
    }
}

export default Contact;