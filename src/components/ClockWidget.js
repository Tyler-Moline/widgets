import { Component } from "react";

export default class ClockWidget extends Component {
  constructor() {
    super();
    this.state = {
      showClock: true,
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  handleToggleClock = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock,
    }));
  };

  render() {
    const { showClock, time } = this.state;
    return (
      <div className="clock-wrapper widget">
        {showClock ? (
          <div>
            <h2>Current Time:</h2>
            <p>{time.toLocaleTimeString()}</p>
          </div>
        ) : null}
        <button onClick={this.handleToggleClock}>
          {showClock ? "Unmount" : "Mount"}
        </button>
      </div>
    );
  }
}
