import React from 'react';
import Footer from './Footer';

class Directions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="directionsPage">
                <img src="../images/map.JPG" alt="map"></img>
                <a href="https://www.google.com/maps/place/1345+E+3900+S+STE+208,+Salt+Lake+City,+UT+84124/@40.6874586,-111.8547411,17z/data=!3m1!4b1!4m5!3m4!1s0x875261dec7ac05c9:0x4247f8009da6219c!8m2!3d40.6874546!4d-111.8525524"><button>Click here for directions</button></a>
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

export default Directions;