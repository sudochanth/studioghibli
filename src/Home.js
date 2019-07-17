import React from 'react';
import './App.css';
import noFace from '/Users/Sunny/development/StudioGhibli/src/noface.png';


const Home = () => {
    return (
        <div id='home'>
            <img id='noFace' src={noFace} alt='noFace'></img>
            <div id='welcome'><h2>Welcome</h2></div>
        </div>
    );
};

export default Home;