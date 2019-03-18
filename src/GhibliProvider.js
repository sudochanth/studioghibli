import React from 'react';
import axios from 'axios';
import './App.css';

const { Provider, Consumer } = React.createContext();

class GhibliProvider extends React.Component {
    constructor() {
        super()

        this.state = {
            filmsArray: []
        }
    }

    getFilms = () => {
        axios.get('https://ghibliapi.herokuapp.com/films').then(response => {
            this.setState({filmsArray: response.data})
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Provider value={{
                getFilms: this.getFilms,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export default GhibliProvider;

export function withGhibli (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}