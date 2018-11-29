import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import { FaGitlab, FaLinkedin, FaIdCard } from "react-icons/fa";
import {injectIntl} from 'react-intl'; 

class NavBar extends Component {
    render() {
        const { intl, content } = this.props;

        let flexDirection, spacing, textCentered, marginAuto;
        if(this.props.actResponsive) {
            flexDirection = " flex-column";
            spacing = "";
            textCentered = " text-center";
            marginAuto = "";
        } else {
            flexDirection = " flex-row";
            spacing = " px-2";
            textCentered = "";
            marginAuto = " mr-auto";
        }

        var lang_country = this.props.lang === "da" ? "gb" : "dk";

        return(
            <div className={"_navbar d-flex mb-3" + flexDirection}>
                <div className={"d-flex" + marginAuto + flexDirection + textCentered}>
                    <a className={spacing} href="#top"><FormattedMessage id="nav.intro"/></a>
                    <a className={spacing} href="#cv"><FormattedMessage id="nav.cv"/></a>
                    <a className={spacing} href="#code"><FormattedMessage id="nav.code"/></a>
                    <a className={spacing} href="#contact"><FormattedMessage id="nav.contact"/></a>
                </div>
                <div className={"d-flex" + flexDirection + textCentered}>
                    <a href={intl.formatMessage({id: "cv_url"})} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.cv"})}><FaIdCard/></a>
                    <a href={content.git_url} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.code"})}><FaGitlab/></a>
                    <a href={content.linkedin_url} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.li"})}><FaLinkedin/></a>
                    <a href="/" onClick={(e) => this.props.changeLang(e)} className={spacing}>
                        <span className={"flag-icon flag-icon-" + lang_country + " " + spacing} data-tip={intl.formatMessage({id: "change_lang"})}/>
                    </a>
                </div>
            </div>
        );
    };
}

export default injectIntl(NavBar);