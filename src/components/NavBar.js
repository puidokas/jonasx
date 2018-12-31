import React, { Component } from 'react';
import {injectIntl} from 'react-intl';
import { FaAngleRight, FaGitlab, FaLinkedin, FaIdCard, FaBars } from "react-icons/fa";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            closed: true
        };
    }

    changeStateNavBar = () => {
        this.setState({closed: !this.state.closed});
    }

    render() {
        const { intl } = this.props;
        let navHeader = <FaBars/>;
        let navItems;
        let navBarClass = "navbar";

        if(this.state.closed)
        navBarClass += " hidden";

        navItems = 
            <div className={navBarClass}>
                <div>
                    <b className="navName">Navigation:</b>
                    <a href="#intro"><FaAngleRight/><div className="navText">{intl.formatMessage({id: "nav.intro"})}</div></a>
                    <a href="#cv"><FaIdCard/><div className="navText">{intl.formatMessage({id: "nav.cv"})}</div></a>
                    <a href="#code"><FaGitlab/><div className="navText">{intl.formatMessage({id: "nav.code"})}</div></a>
                    <a href="#contact"><FaLinkedin/><div className="navText">{intl.formatMessage({id: "nav.contact"})}</div></a>
                </div>
            </div>

        return(
            <div>
                <div className="navBarButton" onClick={() => {this.changeStateNavBar()}}>{navHeader}<div className="navBarButtonText">Navigation Bar</div></div>
                {navItems}
            </div>
        );
    };
}

export default injectIntl(NavBar);