import React from 'react';
import Footer from './Footer';
import brain from './images/brainLogo.png';
import sleepinessScoreForm from './forms/scale.pdf';
import newPatientForms from './forms/newPatient.pdf';
import sleepHealthQuestionnaire from './forms/questionaire.pdf';
import headacheMedication from './forms/medication.pdf';

// let button = document.getElementsByClassName("download");
// let form = document.getElementsByClassName("hidden");
// let isHidden = true;

class Documents extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.form.classList.toggle("hidden")
    // }

    render() {
        return (
            <div className="documentsPage">
                <img src={brain} alt="brain logo" id="logo"></img>
                <p>
                    If you are new to our clinic, please download, print and fill out the "New patient forms". 
                    In addition, if you are seeing Dr. Peterson for a sleep evaluation, please also fill out the 
                    "Sleep Health Questionnaire"  If you are seeing Dr. Peterson for chronic headaches, please fill 
                    out the "Headache medication list" form.  The Epworth Sleepiness Scale score is included in the 
                    Sleep Health Questionnaire but provided here separately if needed for sleep disorder screening.  
                    These forms are to be used in conjunction with your visit with Dr. Peterson and are not intended 
                    for any other use.  
                </p>
                <div className="docContainer">
                    <h3>New Patient Forms</h3>
                    <a href={newPatientForms} type="application/pdf" width="65%" height="600px" className="hidden">Click here to download/print</a>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Sleep Health Questionnaire</h3>
                    <a href={sleepHealthQuestionnaire} type="application/pdf" width="65%" height="600px" className="hidden">Click here to download/print</a>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Headache Medication List</h3>
                    <a href={headacheMedication} type="application/pdf" width="65%" height="600px" className="hidden">Click here to download/print</a>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Epworth Sleepiness Scale Score</h3>
                    <a href={sleepinessScoreForm} type="application/pdf" width="65%" height="600px" className="hidden">Click here to download/print</a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Footer />
            </div>
        )
    }
}
    
export default Documents;