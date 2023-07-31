import { Component } from "react";

export default class TextAlignWidget extends Component {
  constructor() {
    super();

    this.state = {
      textAlign: "center",
    };
  }

  handleRight = () => {
    this.setState((prevState) => ({
      textAlign: (prevState.textAlign = "right"),
    }));
  };

  handleLeft = () => {
    this.setState((prevState) => ({
      textAlign: (prevState.textAlign = "left"),
    }));
  };

  handleCenter = () => {
    this.setState((prevState) => ({
      textAlign: (prevState.textAlign = "center"),
    }));
  };

  render() {
    return (
      <div className="text-align-wrapper widget">
        <h1>Text Align Widget</h1>
        <h1 style={{ textAlign: `${this.state.textAlign}` }}>hello there</h1>
        <div className="btn-wrapper">
          <button onClick={this.handleLeft}>Left</button>
          <button onClick={this.handleCenter}>Center</button>
          <button onClick={this.handleRight}>Right</button>
        </div>
      </div>
    );
  }
}
