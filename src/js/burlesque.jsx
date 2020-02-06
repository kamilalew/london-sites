import React from "react";
import Header from './header.jsx';
import Footer from './Footer.jsx';
import SubpageBurlesque from './Subpage_burlesque.jsx';

export default class Subsite_burlesque extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SubpageBurlesque/>
                <Footer/>
            </div>
        )
    }
}