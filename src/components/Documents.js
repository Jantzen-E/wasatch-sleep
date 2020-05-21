import React from 'react';
import Footer from './Footer';

class Documents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="documentsPage">
                <a href="./">About Us |</a>
                <a href="./contact"> Contact Us |</a>
                <a href="./services"> Services |</a>
                <a href="./directions"> Directions |</a>
                <a href="./sleepinessscale"> Epworth Sleepiness Scale |</a>
                <a href="./documents"> Documents</a>
                <Footer />
            </div>
        )
    }
}
    
export default Documents;