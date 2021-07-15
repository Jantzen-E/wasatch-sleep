import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';
import '../Responsive.css';

function Page() {
    return(
        <div className="landingAndFooter">
            <LandingPage />
            <Footer />
        </div>
    );
}

export default Page;