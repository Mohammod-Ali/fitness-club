import React, { useEffect, useState } from "react";
import "./Exercise.css";

const Exercise = (props) => {
  console.log(props.cart);
  const { img, name, age, details, time } = props.cart;

  return (
    <div className="cart">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{details}</p>
      <p>Age Recommended: {age}</p>
      <p>Time: {time}</p>
      <button className="btn-cart">
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Exercise;
