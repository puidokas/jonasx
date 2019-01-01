import React, { Component } from 'react';
import {injectIntl} from 'react-intl';

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
        let navItems;
        let navBarClass = "navbar";

        navItems = 
            <div className={navBarClass}>
                    <a href="#intro"><div className="navText">{intl.formatMessage({id: "nav.intro"})}</div></a>
                    <a href="#cv"><div className="navText">{intl.formatMessage({id: "nav.cv"})}</div></a>
                    <a href="#code"><div className="navText">{intl.formatMessage({id: "nav.code"})}</div></a>
                    <a href="#contact"><div className="navText">{intl.formatMessage({id: "nav.contact"})}</div></a>
            </div>

        return navItems;
    };
}

export default injectIntl(NavBar);