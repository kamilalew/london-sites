import React from "react";

import {
    Link,
    // NavLink,
} from 'react-router-dom';




export default class Menu extends React.Component {
    state = {
        class: 'menu',
    };

    handleClick = () => {
        this.setState({
            class: (this.state.class === "menu") ? "active" : "menu",
        })
    };

    render() {
        const style = {
            class: (this.state.class === "menu") ? "active" : "menu",
        };
        return (
            <div className={this.state.class} style={style}>
                <button className='buttonHamburger' onClick={this.handleClick} ><i className="fas fa-ellipsis-v"></i><i
                    className="fas fa-bars"></i></button>
                    <ul className="menuList" >
                        <li><Link activeClassName="activeItemMenu" to={"/"}>Home</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/camden-passage">Camden Passage</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/isabella-plantation">Isabella Plantation</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/leighton-house">Leighton House</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/little-venice">Little Venice</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/royal-albert-hall">Royal Albert Hall</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/st-martin-in-the-fields">St Martin in the Fields</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/thames-path">Thames Path</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/house-of-burlesque">House of Burlesque</Link></li>
                        <li><Link activeClassName="activeItemMenu" to="/wiltons-music-hall">Wilton's Music Hall</Link></li>
                    </ul>
            </div>

        )
    }
}





