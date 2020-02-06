import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';
import Header from './js/header';
import MainText from './js/MainText.jsx';
import Gallery from './js/Gallery.jsx';
import Footer from './js/Footer';
import Subsite from './js/camden_passage.jsx';
import Subsite_Isabella from './js/isabella_plantation.jsx';
import Subsite_leighton from './js/leighton_house.jsx';
import Subsite_littlevenice from './js/littlevenice.jsx';
import Subsite_R_Albert_Hall from './js/R_Albert_Hall.jsx';
import Subsite_StMartin from './js/StMartin.jsx';
import Subsite_thamespath from './js/thames_path.jsx';
import Subsite_burlesque from './js/burlesque.jsx';
import Subsite_wiltons from './js/wiltons.jsx';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';



class AllLondon extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainText/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path= "/" component = {AllLondon}/>
                <Route exact path= "/camden-passage" component = {Subsite}/>
                <Route exact path= "/isabella-plantation" component = {Subsite_Isabella}/>
                <Route exact path= "/leighton-house" component = {Subsite_leighton}/>
                <Route exact path= "/little-venice" component = {Subsite_littlevenice}/>
                <Route exact path= "/royal-albert-hall" component = {Subsite_R_Albert_Hall}/>
                <Route exact path= "/st-martin-in-the-fields" component = {Subsite_StMartin}/>
                <Route exact path= "/thames-path" component = {Subsite_thamespath}/>
                <Route exact path= "/house-of-burlesque" component = {Subsite_burlesque}/>
                <Route exact path= "/wiltons-music-hall" component = {Subsite_wiltons}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;