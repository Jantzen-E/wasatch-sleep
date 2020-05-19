import React from 'react';
import Footer from './Footer';

class Scale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scalePage">
                <h2>Epworth Sleepiness Scale (ESS)</h2>
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
                <div className="scaleForm">
                    <div className="container">
                        <div className="headings">
                            <div>SITUATION</div>
                            <div>CHANCE OF DOZING</div>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="sitting">1. Sitting and reading</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="watching">2. Watching TV</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">3. Sitting inactive in a public place (e.g. in a theater or meeting)</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">4. As a passenger in a car for an hour without a break</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">5. Lying down to rest in the afternoon when the circumstances permit</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">6. Sitting and talking to someone</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">7. Sitting quietly after lunch without alcohol</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                        <div className="questionAndAnswer">
                            <p className="individualSituations">8. In a car while stopped for a few minutes in traffic</p>
                            <input type="number" max="3" min="0"></input>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="">About Us |</a>
                    <a href=""> Contact Us |</a>
                    <a href=""> Services |</a>
                    <a href=""> Site Map |</a>
                    <a href=""> Epworth Sleepiness Scale</a>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Scale;