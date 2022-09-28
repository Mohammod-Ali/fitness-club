import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>this is activity: {props.cart.length}</h1>
            <h1>this is cart</h1>
        </div>
    );
};

export default Cart;