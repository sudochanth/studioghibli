import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import FilmList from './FilmList';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route path='/FilmList' component={FilmList} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;