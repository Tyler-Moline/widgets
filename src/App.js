import "./App.scss";
import CounterWidget from "./components/CounterWidget";
import Greeting from "./components/ToggleGreetingWidget";
import HideMe from "./components/HideMeWidget";
import FontSizer from "./components/FontSizerWidget";
import TextAlignWidget from "./components/TextAlignWidget";
import ClockWidget from "./components/ClockWidget";
import ColorChanger from "./components/ColorChangerWidget";
import Slider from "./components/RgbSliderWidget";

function App() {
  return (
    <div className="App">
      <CounterWidget />
      <Greeting />
      <HideMe />
      <FontSizer />
      <TextAlignWidget />
      <ClockWidget />
      <ColorChanger />
      <Slider />
    </div>
  );
}

export default App;
