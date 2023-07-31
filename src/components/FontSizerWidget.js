import { Component } from "react";

export default class FontSizer extends Component {
  constructor() {
    super();

    this.state = {
      fontSize: 10,
    };
  }

  handleGrowFont = () => {
    this.setState((prevState) => ({
      fontSize: prevState.fontSize + 10 <= 100 ? prevState.fontSize + 10 : 100,
    }));
  };

  handleShrinkFont = () => {
    this.setState((prevState) => ({
      fontSize: prevState.fontSize - 10 >= 10 ? prevState.fontSize - 10 : 10,
    }));
  };

  render() {
    const { fontSize } = this.state;

    return (
      <div className="font-sizer-widget-wrapper widget">
        <h1>Font Size Widget</h1>
        <h1 style={{ fontSize: `${fontSize}px` }}>hello there</h1>
        <div className="btn-wrapper">
          <button onClick={this.handleGrowFont}>Grow</button>
          <button onClick={this.handleShrinkFont}>shrink</button>
        </div>
      </div>
    );
  }
}
