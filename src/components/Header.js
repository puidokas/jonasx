import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import 'flag-icon-css/css/flag-icon.css';
import ReactTooltip from 'react-tooltip'

const Header = ({intl, lang, changeLang, content}) => {
    var lang_country = lang === "da" ? "gb" : "dk";

    return(
        <div>
            <ReactTooltip />
            <header>
                <div className="header">
                    <h1><a href={content.site_url} target="_self">{content.name}</a></h1>
                    <a href="/" onClick={(e) => changeLang(e)} data-for="change_lang" data-tip={intl.formatMessage({id: "change_lang"})}>
                            <span className={"flag-icon flag-icon-" + lang_country}/>
                            <ReactTooltip id="change_lang" getContent={[() => { return intl.formatMessage({id: "change_lang"}) }]}/>
                    </a>
                </div>
                <FormattedMessage id="header.title">{ t=> <div className="subtitle">{t}</div>}</FormattedMessage>
            </header>

        </div>
    );
}

export default injectIntl(Header);