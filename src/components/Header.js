import React from 'react';
import {FormattedMessage} from 'react-intl';
import 'flag-icon-css/css/flag-icon.css';
import ReactTooltip from 'react-tooltip'
import { FaGitlab, FaLinkedin, FaIdCard } from "react-icons/fa";

const Header = ({content, actResponsive, lang, changeLang}) => {
    let navBarContainerDirection = actResponsive ? "flex-column" : "flex-row";
    let navBarMargin = actResponsive ? "" : "mr-3";

    var lang_country, lang_country_print;
    if(lang === "da") {
        lang_country = "gb";
        lang_country_print = "English";
    } else {
        lang_country = "dk";
        lang_country_print = "Danish";
    }
    
    return(
        <div>
            <ReactTooltip />
            <header>
                <h1 className="my-0"><a href={content.site_url} target="_self">{content.name}</a></h1>
                <p className="subtitle"><FormattedMessage id="header.title"/></p>
            </header>
            <div className={"_navbar d-flex my-3 " + navBarContainerDirection}>
                <div className="mr-auto p-1">
                    <a className={navBarMargin} href="#top"><FormattedMessage id="nav.intro"/></a>
                    <a className={navBarMargin} href="#cv"><FormattedMessage id="nav.cv"/></a>
                    <a className={navBarMargin} href="#code"><FormattedMessage id="nav.code"/></a>
                    <a href="#contact"><FormattedMessage id="nav.contact"/></a>
                </div>
                <div className="p-1">
                    <FormattedMessage id="cv_url">{url => <a href={url} className={navBarMargin} target="_blank" data-tip="CV on Google Drive"><FaIdCard/></a>}</FormattedMessage>
                    <a href={content.git_url} className={navBarMargin} target="_blank" data-tip="Code on GitLab"><FaGitlab/></a>
                    <a href={content.linkedin_url} className={navBarMargin} target="_blank" data-tip="LinkedIn Profile"><FaLinkedin/></a>
                    <a href="#" onClick={(e) => changeLang(e)}>
                        <span className={"flag-icon flag-icon-" + lang_country + " " + navBarMargin} data-tip={"Change language to " + lang_country_print + "?"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;