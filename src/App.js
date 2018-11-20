import React, { Component } from 'react';
import { throttle } from "throttle-debounce";
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lang: 0, // 0 = en; 1 = da
        };
        this.json = require('./content.json');
        this.resizeThrottled = throttle(1000, this.resize);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeThrottled)
      }

    resize = () => this.forceUpdate()

    isWindowWidthOver(width) {
        if (window.innerWidth > width)
            return true;
        else
            return false;
    }

    render() {
        const content = this.state.lang === 0 ? this.json.en: this.json.da;

        let actResponsive = !this.isWindowWidthOver(400) ? true : false;
        let navBarContainerDirection = actResponsive ? "flex-column" : "flex-row";
        let navBarMargin = actResponsive ? "" : "mr-3";

        return (
            <div className='container p-3'>
                <header>
                    <h1 className="my-0"><a href={this.json.site_url} target="_self">{this.json.name}</a></h1>
                    <p className="subtitle">{content.title}</p>
                </header>
                <div className={"d-flex my-3 " + navBarContainerDirection}>
                    <a className={navBarMargin} href="#top">{content.menu_items[0]}</a>
                    <a className={navBarMargin} href="#cv">{content.menu_items[1]}</a>
                    <a className={navBarMargin} href="#code">{content.menu_items[2]}</a>
                    <a href="#contact">{content.menu_items[3]}</a>
                </div>
                <div className="text-justify">
                    <p>{content.intro[0]}</p>
                    <p>{content.intro[1]}</p>
                    <p>{content.intro[2]}</p>
                </div>
                <h2 id="cv"><a href="#top">{content.menu_items[1]}</a></h2>
                <p>{content.cv} <a href={content.cv_url} target="_blank">{content.cv_link}</a>.</p>
                <h2 id="code"><a href="#top">{content.menu_items[2]}</a></h2>
                <div className="text-justify">
                    <p>{content.code} <a href={this.json.git_url} rel="noopener noreferrer" target='_blank'>{content.git}</a>.</p>
                </div>
                <h2 id="contact"><a href="#top">{content.menu_items[3]}</a></h2>
                <div className={"d-flex" + (actResponsive ? " flex-wrap" : "")}>
                    <div className="flex-grow-1 text-justify mr-4">
                        You can find me on <a href="https://www.linkedin.com/in/hoffmannjonas/" rel="noopener noreferrer" target='_blank'>LinkedIn</a>. You are welcome to add me as a connection and write a private message.
                    </div>
                    <div className={"LI-profile-badge" + (actResponsive ? " my-3" : "")} data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="hoffmannjonas"><a class="LI-simple-link" href='https://dk.linkedin.com/in/hoffmannjonas?trk=profile-badge'>Jonas Hoffmann</a></div>
                </div>
            </div>
        );
    }
  }
  
export default App;