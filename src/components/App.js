import React, { Component } from 'react';
import '../styles.css';
import {IntlProvider, addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_da from 'react-intl/locale-data/da';
import lang_da from "../translations/da.json";
import lang_en from "../translations/en.json";
import {FormattedMessage} from 'react-intl';
import Header from './Header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lang: "en",
        };
        this.content = require('../content.json');
    }

    componentDidMount() {
        this.setDefaultLang();
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
        let language = this.state.lang;
        let messages = language === 'da' ? lang_da : lang_en;
        addLocaleData([...locale_en, ...locale_da]);

        return (
            <IntlProvider locale={language} messages={messages}>
                <div className='container niceBorder'>
                    <Header content={this.content} lang={this.state.lang} changeLang={this.changeLang}/>
                    <h2 id="intro"><a href="#top"><FormattedMessage id="nav.intro"/></a></h2>
                    <div>
                        <FormattedMessage id="intro_1" tagName="p"/>
                        <FormattedMessage id="intro_2" tagName="p"/>
                    </div>
                    <h2 id="cv"><a href="#top"><FormattedMessage id="nav.cv"/></a></h2>
                    <FormattedMessage id="cv">{t => <p>{t} <a href={this.content.cv_url} target="_blank" rel="noopener noreferrer"><FormattedMessage id="here">{t => t}</FormattedMessage></a>.</p>}</FormattedMessage>
                    <h2 id="code"><a href="#top"><FormattedMessage id="nav.code"/></a></h2>
                    <p><FormattedMessage id="code" values={{git: <a href={this.content.git_url} rel="noopener noreferrer" target='_blank'>GitLab</a>}} /></p>
                    <h2 id="contact"><a href="#top"><FormattedMessage id="nav.contact"/></a></h2>
                    <p><FormattedMessage id="contact" values={{link: <a href="https://www.linkedin.com/in/hoffmannjonas/" rel="noopener noreferrer" target='_blank'>LinkedIn</a>}}/></p>
                </div>
            </IntlProvider>
        );
    }
  }
  
export default App;