import "./Exercise.css";

const Exercise = (props) => {
  const { img, name, age, details, time } = props.accessory;

  return (
    <div className="container">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{details}</p>
      <p>Age Recommended: {age}</p>
      <p>Time: {time}m</p>
      <button onClick={()=> props.handleClick(props.accessory)} className="btn-cart">
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Exercise;
