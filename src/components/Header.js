import React from 'react';
import {FormattedMessage} from 'react-intl';
import 'flag-icon-css/css/flag-icon.css';
import ReactTooltip from 'react-tooltip'

const Header = ({content}) => {
    return(
        <div>
            <ReactTooltip />
            <header>
                <h1 className="my-0"><a href={content.site_url} target="_self">{content.name}</a></h1>
                <p className="subtitle"><FormattedMessage id="header.title"/></p>
            </header>

        </div>
    );
}

export default Header;