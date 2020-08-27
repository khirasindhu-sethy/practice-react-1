import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput.js";
import UserOutput from "./components/UserOutput.js";

export class App extends Component {
  state = {
    username: "Lipika",
  };
  changeName = () => {
    this.setState({
      username: "budhi",
    });
  };
  typedName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const styles = {
      border: "none",
      background: "#404040",
      color: "#ffffff",
      fontSize: "17px",
      padding: "15px",
      borderRadius: "6px",
    };
    return (
      <div className="App">
        <UserInput clicked={this.typedName} />
        <UserOutput username={this.state.username} />
        <button style={styles} onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
