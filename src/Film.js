import React from 'react';
import './App.css';

import { withGhibli } from './GhibliProvider';

const Film = (props) => {
    let { id } = props.match.params
    const card =  props.filmsArray.find(film => {
        return film.id === id
    })

    return (
        <div >
            { card ? 
                <div id='filmInfo'>
                    <h1>{card.title}</h1>
                    <h3 style={{color: 'rgba(102, 51, 153, 1)'}}>{card.director}</h3>
                    <br/>
                    <h2>{card.description}</h2>
                </div>
            : "no info yet" 
            }
        </div>
    );
};

export default withGhibli(Film);
