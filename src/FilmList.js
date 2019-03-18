import React, { Component } from 'react';
import Film from './Film';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';
import { withGhibli } from './GhibliProvider'

class FilmList extends Component {
    componentDidMount() {
        this.props.getFilms();
    }

    randomFilm = () => {
        var rand = this.props.filmsArray[Math.floor(Math.random() * this.props.filmsArray.length)]
        this.props.history.push(`/FilmList/${rand.id}`)   
    }

    getFilm = (film) => {
        return (
            <Link className='link filmLink' key={film.id} to={`/FilmList/${film.id}`}>{film.title}</Link>
        )
    }

    render() {
        const mappedFilms = this.props.filmsArray.map((film, i) => this.getFilm(film))
        return (
            <div>
                <div id='mappedContainer'>{mappedFilms}</div>
                <div id='buttonContainer'>
                    <button onClick={this.randomFilm}>Random Film</button>
                    <button onClick={() => this.props.history.goBack()}>Go Back</button>
                </div>
                    <Switch>
                        <Route exact path='/FilmList/:id' component={Film} />
                        {/* <Route exact path='/FilmList/:id' render={props => (
                            <Film film={props} />
                        )} /> */}

                    </Switch>
            </div>
        );

    }
};

export default withGhibli(FilmList);


// const mappedFilms = this.props.filmsArray.map((film, i) => {
        //     return(
        //     <Link to={`/films/${film.title}`}>{film.title}</Link>
        //     )
        // })