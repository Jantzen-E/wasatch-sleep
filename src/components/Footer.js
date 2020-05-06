import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <h5 className="footerTitle">Wasatch Sleep Health Center 2020</h5>
                <h5 className="footerTitle">Office: 801-281-1788</h5>
            </div>
        );   
    }
}

export default Footer;