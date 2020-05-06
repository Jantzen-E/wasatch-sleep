import React from 'react';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContent">
                <img src="https://lh3.googleusercontent.com/DRxevULBhMhVteSCLk8jr2tHXof460k1_gFEaFnXQILaNCTPjemRoaGmDN6jb3pmCbS2saY=s170" id="logo"></img>
                <h1>Wasatch Sleep Health Center</h1>
                <img src="https://mdxvitals-res.cloudinary.com/private_images/h_150,w_150,c_fill,g_face,f_auto,dpr_auto/professionals/1912559/photo.jpg"></img>
                <h2>Dr. David Peterson M.D.</h2>
                <p>
                    Dr. Peterson is originally from San Diego, California.  He earned his Doctor of 
                    Medicine at the University of Utah School of Medicine.  After completing a residency in Neurology, 
                    he completed a fellowship in sleep medicine under the direction of both the Pulmonary and Neurology 
                    departments at the University of Utah Sleep Wake Center.
                </p>
                <p>
                    The Wasatch Sleep Health Center was designed to meet the highest standards of a sleep clinic and 
                    laboratory center set by the American Academy of Sleep Medicine.  Dr. Peterson adheres to the practice 
                    of meeting and evaluating each patient in the clinic before and after overnight testing.  University 
                    centers have found "face-to-face" review of the study data with the sleep physician improves therapy 
                    compliance.  This also allows for evaluation and treatment of often co-morbid sleep disorders. 
                </p>
                <p>
                    Patients who have excessive daytime sleepiness indicated by an Epworth score > 8 should be evaluated.
                    To take the Epworth Sleepiness Scale Test click here
                </p>
                <button>Take Test</button>
                <h3>Call Wasatch Sleep Health Center at (801) 281-1788 today!</h3>
                <a href="">About Us |</a>
                <a href=""> Contact Us |</a>
                <a href=""> Services |</a>
                <a href=""> Site Map |</a>
                <a href=""> Epworth Sleepiness Scale</a>
            </div>
        );
    }
}

export default LandingPage;