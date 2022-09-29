import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
        <h1>Blogs:</h1>
      <div className="blogs-container">
        <div>
          <h3>How does react work?</h3>
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
        <div>
          <h3>Difference between props and state?</h3>
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </div>
        <div>
          <h3>Use of useEffect in react?</h3>
          <p>
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we'll refer to it as our “effect”), and call it later after
            performing the DOM updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
