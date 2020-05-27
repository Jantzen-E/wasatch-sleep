import React from 'react';
import brain from './images/brainLogo.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <a href="./">About Us |</a>
                <a href="./contact"> Contact Us |</a>
                <a href="./services"> Services |</a>
                <a href="./directions"> Directions |</a>
                <a href="./sleepinessscale"> Epworth Sleepiness Scale |</a>
                <a href="./documents"> Documents</a>
                <div className="footerFormat">
                    <img src={brain} alt="brain logo" id="logoFooter"></img>
                    <h5 className="footerTitle">Wasatch Sleep Health Center 2020</h5>
                </div>
            </div>
        );   
    }
}

export default Footer;