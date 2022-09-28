import React from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import './Gym.css'

const Gym = () => {
    return (
        <div className='gym-container'>
            <div className="exercise-container">
                <Header></Header>
                <Exercise></Exercise>
            </div>
            <div className="activity-container">
                <h1>this is activity</h1>
            </div>
        </div>
    );
};

export default Gym;