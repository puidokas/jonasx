import React, { Component } from 'react';
import { throttle } from "throttle-debounce";
import '../styles.css';
import Header from './Header'
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_da from 'react-intl/locale-data/da';
import lang_da from "../translations/da.json";
import lang_en from "../translations/en.json";
import {FormattedMessage} from 'react-intl';
import NavBar from './NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lang: "en",
        };
        this.content = require('../content.json');
        this.resizeThrottled = throttle(1000, this.resize);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeThrottled);
        this.setDefaultLang();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeThrottled)
      }

    resize = () => this.forceUpdate()

    isWindowWidthOver(width) {
        return window.innerWidth > width ? true : false;
    }

    setDefaultLang = () => {
        let lang = navigator.language.split(/[-_]/)[0];

        if(this.state.lang !== lang)
            this.setState({lang: lang});
    }

    changeLang = (e) => {
        e.preventDefault();
        let changeTo = this.state.lang === "da" ? "en" : "da";
        this.setState({lang: changeTo});
    }

    render() {
        let actResponsive = !this.isWindowWidthOver(499) ? true : false;
        
        let language = this.state.lang;
        let messages = language === 'da' ? lang_da : lang_en;

        addLocaleData([...locale_en, ...locale_da]);

        return (
            <IntlProvider locale={language} messages={messages}>
                <div className='container p-3'>
                    <Header content={this.content}/>
                    <NavBar content={this.content} actResponsive={actResponsive} lang={this.state.lang} changeLang={this.changeLang}/>
                    <div>
                        <FormattedMessage id="intro_1" tagName="p"/>
                        <FormattedMessage id="intro_2" tagName="p"/>
                        <FormattedMessage id="intro_3" tagName="p"/>
                    </div>
                    <FormattedMessage id="nav.cv">{h => <h2 id="cv"><a href="#top">{h}</a></h2>}</FormattedMessage>
                    <FormattedMessage id="cv">{t => <p>{t} <a href={this.content.cv_url} target="_blank"><FormattedMessage id="here">{t => t}</FormattedMessage></a>.</p>}</FormattedMessage>
                    <FormattedMessage id="nav.code">{h => <h2 id="code"><a href="#top">{h}</a></h2>}</FormattedMessage>
                    <FormattedMessage id="code">{t => <p>{t} <a href={this.content.git_url} rel="noopener noreferrer" target='_blank'>GitLab</a>.</p>}</FormattedMessage>
                    <FormattedMessage id="nav.contact">{h => <h2 id="contact"><a href="#top">{h}</a></h2>}</FormattedMessage>
                    <div className={"d-flex" + (actResponsive ? " flex-wrap" : "")}>
                        <div className="flex-grow-1 text-justify mr-4">
                            <p><FormattedMessage id="contact" values={{link: <a href="https://www.linkedin.com/in/hoffmannjonas/" rel="noopener noreferrer" target='_blank'>LinkedIn</a>}}/>.</p>
                        </div>  
                        <div className={"LI-profile-badge" + (actResponsive ? " my-3" : "")} data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="hoffmannjonas"><a className="LI-simple-link" href='https://dk.linkedin.com/in/hoffmannjonas?trk=profile-badge'>Jonas Hoffmann</a></div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
  }
  
export default App;