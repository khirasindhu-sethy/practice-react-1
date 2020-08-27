import React from "react";
import "../css/UserInput.css";
const UserInput = (props) => {
  return (
    <div>
      <input id="input" type="text" required onChange={props.clicked} />
      <label alt="Type Anything" placeholder="Looks Nice"></label>
    </div>
  );
};

export default UserInput;
