import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Break from "../Break/Break";
import "./Cart.css";

const Cart = ({ cart }) => {
  let time = 0;
  for (const exercise of cart) {
    time = time + exercise.time;
  }

  const breakTime = [10, 15, 20, 25, 30];
  const [times, setTimes] = useState(0);

  useEffect(() => {
    const previousTime = localStorage.getItem("breakTime");
    const num = parseFloat(previousTime);
    setTimes(num);
  }, []);
  
  const btnHandle = (singleT) => {

    setTimes(singleT);
    localStorage.setItem("breakTime", singleT);
  };

  const diffToast = () => {
    toast("Congratulations, you are done your activity");
  };

  return (
    <div className="cart">
      <div className="admin-style">
        <img
          src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/84617171_2593761864280435_6324626083966615552_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=pWnRL8xk4UwAX_xwrD8&_nc_ht=scontent.fdac22-1.fna&oh=00_AT9yI3b3bHzZy5h2UFc3ZjanbyMx3rPlIlKsCIqB6oRBTg&oe=6359372D"
          alt=""
        />
        <div>
          <h5>Mohammod Ali</h5>
          <p>
            <small>Chuadanga, Bangladesh</small>
          </p>
        </div>
      </div>

      <div className="btn-break">
        <h3>Add a break</h3>
        <div>
          {breakTime.map((singleTime) => (
            <Break
              btnHandle={btnHandle}
              singleTime={singleTime}
              key={singleTime}
            ></Break>
          ))}
        </div>
      </div>
      <div className="exercise">
        <h3>Exercise Details</h3>
        <div className="exp-time">
          <h5>Exercise time: </h5>
          <h6>{time}minute</h6>
        </div>
        <div className="exp-time">
          <h5>Break time: </h5>
          <h6>{times}minute</h6>
        </div>
      </div>
      <button onClick={diffToast} className="activity-btn">
        Activity Completed
      </button>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  );
};

export default Cart;
