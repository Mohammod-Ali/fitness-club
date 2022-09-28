import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [accessories, setAccessories] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setAccessories(data))
    },[])

    const handleClick = (accessory) =>{
        const newCart = [...cart, accessory]
        setCart(newCart)
      }

    return (
        <div className='gym-container'>
            <div className="exercise-container">
                {
                    accessories.map(accessory => <Exercise
                    accessory={accessory}
                    key={accessory.id}
                    handleClick={handleClick}
                    ></Exercise>)
                }
            </div>
            <div className="activity-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Gym;