import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GhibliProvider from './GhibliProvider'
import App from './App';

ReactDOM.render(
    <BrowserRouter>
         <GhibliProvider>
            <App />
        </GhibliProvider>    
    </BrowserRouter>,
    document.getElementById('root'));