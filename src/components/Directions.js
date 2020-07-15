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
                <p className="addressHeader">
                    1345 East 3900 South Suite #208
                    Salt Lake City UT 84124
                </p>
                <div className="streetMap">
                    <a href="https://www.google.com/maps/place/1345+E+3900+S+STE+208,+Salt+Lake+City,+UT+84124/@40.6874586,-111.8547411,17z/data=!3m1!4b1!4m5!3m4!1s0x875261dec7ac05c9:0x4247f8009da6219c!8m2!3d40.6874546!4d-111.8525524"><img src={map} alt="map" id="map"></img></a>
                    <a href="https://www.google.com/maps/place/1345+E+3900+S+STE+208,+Salt+Lake+City,+UT+84124/@40.6874586,-111.8547411,17z/data=!3m1!4b1!4m5!3m4!1s0x875261dec7ac05c9:0x4247f8009da6219c!8m2!3d40.6874546!4d-111.8525524"><button id="directionsButton">Click here for directions</button></a>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Directions;