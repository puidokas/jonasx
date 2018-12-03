import React, { Component } from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import { FaGitlab, FaLinkedin, FaIdCard } from "react-icons/fa";
import ReactTooltip from 'react-tooltip'

class NavBar extends Component {
    render() {
        const { intl, content } = this.props;
        let flexDirection, spacing, textCentered, marginAuto, navBarColor, navBarColorContainer;

        if(this.props.actResponsive) {
            navBarColorContainer = "";
            navBarColor = " _navbar";
            flexDirection = " flex-column";
            spacing = "";
            textCentered = " text-center";
            marginAuto = "";
        } else {
            navBarColorContainer = " _navbar";
            navBarColor = "";
            flexDirection = " flex-row";
            spacing = " px-2";
            textCentered = "";
            marginAuto = " mr-auto";
        }

        var lang_country = this.props.lang === "da" ? "gb" : "dk";

        return(
            <div className={"d-flex mb-3" + flexDirection + navBarColorContainer}>
                {this.props.actResponsive && <b className="text-center mb-1">Navigation</b>}
                <div className={"d-flex" + marginAuto + flexDirection + textCentered + navBarColor}>
                    <a className={spacing} href="#top"><FormattedMessage id="nav.intro"/></a>
                    <a className={spacing} href="#cv"><FormattedMessage id="nav.cv"/></a>
                    <a className={spacing} href="#code"><FormattedMessage id="nav.code"/></a>
                    <a className={spacing} href="#contact"><FormattedMessage id="nav.contact"/></a>
                </div>
                {this.props.actResponsive && <b className="text-center my-1">Quick links</b>}
                <div className={"d-flex" + flexDirection + textCentered + navBarColor}>
                    <a href={intl.formatMessage({id: "cv_url"})} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.cv"})}><FaIdCard/></a>
                    <a href={content.git_url} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.code"})}><FaGitlab/></a>
                    <a href={content.linkedin_url} className={spacing} target="_blank" data-tip={intl.formatMessage({id: "quick_links.li"})}><FaLinkedin/></a>
                    <a href="/" onClick={(e) => this.props.changeLang(e)} className={spacing} data-for="change_lang" data-tip={intl.formatMessage({id: "change_lang"})}>
                        <span className={"flag-icon flag-icon-" + lang_country + " " + spacing}/>
                        <ReactTooltip id="change_lang" getContent={[() => { return intl.formatMessage({id: "change_lang"}) }]}/>
                    </a>
                </div>
            </div>
        );
    };
}

export default injectIntl(NavBar);