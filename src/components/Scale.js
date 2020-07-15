import React from 'react';
import Footer from './Footer';
import brain from './images/brainLogo.png';

let q1 = document.getElementById('#question1');
let q2 = document.getElementById('#question2');
let q3 = document.getElementById('#question3');
let q4 = document.getElementById('#question4');
let q5 = document.getElementById('#question5');
let q6 = document.getElementById('#question6');
let q7 = document.getElementById('#question7');
let q8 = document.getElementById('#question8');

let result = q1 + q2 + q3+ q4 + q5 + q6 + q7 + q8;

class Scale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value1: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    // calculate() {
    //     alert('i am working')
    //     if(!isNaN(result)) {
    //         document.querySelector('#scaleTotal').innerHTML = result;
    // }

    handleChange(event) {
        this.setState({value: event.target.value})
    };

    sum() {
        document.querySelector('#scaleTotal').innerHTML = 3;
    }

    render() {
        return (
            <div className="scalePage">
                <h2>Epworth Sleepiness Scale (ESS)</h2>
                <img src={brain} alt="brain logo" id="logo"/>
                <h4>Instructions</h4>
                <p>
                    How likely are you to doze off or fall asleep in the following situations, in contrast to just 
                    feeling tired?  This refers to your usual way of life in recent times.  Even if you have not done 
                    some of these things recently, try to work out how they would have affected you.  Use the following 
                    scale to choose the most appropriate number for each situation:
                </p>
                <ul className="numberScale">
                    <li>0 = would never doze off</li>
                    <li>1 = slight chance of dozing off</li>
                    <li>2 = moderate chance of dozing off</li>
                    <li>3 = high chance of dozing off</li>
                </ul>
                <br/>
                <div className="scaleForm">
                    <div className="container">
                        <div className="headings">
                            <div>SITUATION:</div>
                            <div>CHANCE OF DOZING:</div>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="sitting">1. Sitting and reading</p>
                            <input type="number" max="3" min="0" id="question1" value={this.state.value} onChange={this.handleChange}></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="watching">2. Watching TV</p>
                            <input type="number" max="3" min="0" id="question2"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">3. Sitting inactive in a public place (e.g. in a theater or meeting)</p>
                            <input type="number" max="3" min="0" id="question3"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">4. As a passenger in a car for an hour without a break</p>
                            <input type="number" max="3" min="0" id="question4"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">5. Lying down to rest in the afternoon when the circumstances permit</p>
                            <input type="number" max="3" min="0" id="question5"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">6. Sitting and talking to someone</p>
                            <input type="number" max="3" min="0" id="question6"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">7. Sitting quietly after lunch without alcohol</p>
                            <input type="number" max="3" min="0" id="question7"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">8. In a car while stopped for a few minutes in traffic</p>
                            <input type="number" max="3" min="0" id="question8"></input>
                        </div>
                        <div className="questionAndAnswer" id="scaleBorder">
                            <p className="individualSituations">TOTAL: </p>
                            {/* <button>What's my total?</button> */}
                            <input type="text" id="scaleTotal" placeholder="add numbers above"></input>
                        </div>
                    </div>
                </div>
                <p>
                    A total ESS score of 1 - 6 is likely getting enough sleep, 7 - 8 average, and 9 and up requires 
                    a sleep specialist evaluation.  Consider screening for anemia, hypothyroidism and vitamin B12 
                    deficiency.
                </p>
                <br/>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Scale;