import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])

    const handleClick = (cart) =>{
        console.log(cart);
      }

    return (
        <div className='gym-container'>
            <div className="exercise-container">
                {
                    carts.map(cart => <Exercise
                    cart={cart}
                    key={cart.id}
                    handleClick={handleClick}
                    ></Exercise>)
                }
            </div>
            <div className="activity-container">
                <h1>this is activity</h1>
            </div>
        </div>
    );
};

export default Gym;