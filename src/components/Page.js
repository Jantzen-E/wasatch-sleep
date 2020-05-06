import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="landingAndFooter">
                <LandingPage />
                <Footer />
            </div>
        );
    }
}

export default Page;