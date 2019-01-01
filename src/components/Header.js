import React, { Component } from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import 'flag-icon-css/css/flag-icon.css';
import ReactTooltip from 'react-tooltip'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import NavBar from './NavBar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navBarOpened: false
        };
    }

    changeStateNavBar = () => {
        this.setState({navBarOpened: !this.state.navBarOpened});
    }

    render() {
        const {intl, lang, changeLang, content} = this.props;
        var lang_country = lang === "da" ? "gb" : "dk";
        let navBarButtonClass = this.state.navBarOpened ? "navBarButton navBarOpen" : "navBarButton";

        return(
            <div className="headerContainer">
                <ReactTooltip />
                <header>
                    <div className="header">
                        <h1><a href={content.site_url} target="_self">{content.name}</a></h1>
                        <div className={navBarButtonClass} onClick={() => {this.changeStateNavBar()}}>
                            <IconContext.Provider value={{size: "1.8em"}}>
                                <FaBars/>
                            </IconContext.Provider>
                        </div>
                        <NavBar/>
                        <a href="/" onClick={(e) => changeLang(e)} data-for="change_lang" data-tip={intl.formatMessage({id: "change_lang"})}>
                                <span className={"flag-icon flag-icon-" + lang_country}/>
                                <ReactTooltip id="change_lang" getContent={[() => { return intl.formatMessage({id: "change_lang"}) }]}/>
                        </a>
                    </div>
                    <FormattedMessage id="header.title">{ t=> <div className="subtitle">{t}</div>}</FormattedMessage>
                </header>
                {this.state.navBarOpened && <NavBar/>}
            </div>
        );
    }
}

export default injectIntl(Header);