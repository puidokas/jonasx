import React, { Component } from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import { FaGitlab, FaLinkedin, FaIdCard } from "react-icons/fa";

class NavBar extends Component {
    render() {
        const { intl, content } = this.props;

        return(
            <div>
                <div className="navbar">
                    <div>
                        <b className="navName">Navigation</b>
                        <a href="#cv"><FormattedMessage id="nav.cv"/></a>
                        <a href="#code"><FormattedMessage id="nav.code"/></a>
                        <a href="#contact"><FormattedMessage id="nav.contact"/></a>
                    </div>
                    <div>
                        <b className="navName">{intl.formatMessage({id: "quick_links"})}</b>
                        <a href={intl.formatMessage({id: "cv_url"})} target="_blank" data-tip={intl.formatMessage({id: "quick_links.cv"})}><FaIdCard/></a>
                        <a href={content.git_url} target="_blank" data-tip={intl.formatMessage({id: "quick_links.code"})}><FaGitlab/></a>
                        <a href={content.linkedin_url} target="_blank" data-tip={intl.formatMessage({id: "quick_links.li"})}><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        );
    };
}

export default injectIntl(NavBar);