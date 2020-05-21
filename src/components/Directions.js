import React from 'react';
import Footer from './Footer';
import map from './images/map.PNG';

class Directions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="directionsPage">
                <div className="streetMap">
                    <img src={map} alt="map" id="map"></img>
                    <a href="https://www.google.com/maps/place/1345+E+3900+S+STE+208,+Salt+Lake+City,+UT+84124/@40.6874586,-111.8547411,17z/data=!3m1!4b1!4m5!3m4!1s0x875261dec7ac05c9:0x4247f8009da6219c!8m2!3d40.6874546!4d-111.8525524"><button id="directionsButton">Click here for directions</button></a>
                </div>
                <div>
                    <a href="./">About Us |</a>
                    <a href="./contact"> Contact Us |</a>
                    <a href="./services"> Services |</a>
                    <a href="./directions"> Directions |</a>
                    <a href="./sleepinessscale"> Epworth Sleepiness Scale |</a>
                    <a href="./documents"> Documents</a>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Directions;