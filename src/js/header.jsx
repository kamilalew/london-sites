import React from "react";
import Menu from './Menu.jsx';
import London_logo from '../images/London_logo.jpg'


export default class Header extends React.Component {
    render() {
        return(
            <div className="full_background">
                <div className="container">
                    <div className="main_header">
                        <div className="logo"><img src={London_logo} id="LondonLogo" alt="town"/></div>
                        <div className="menu"><Menu/></div>
                    </div>
                </div>
            </div>
        )
    }
}
