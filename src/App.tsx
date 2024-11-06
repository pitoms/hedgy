import "./App.css";
import Character from "./components/character";
import { onKeyDown } from "./engine/keyPress";

function App() {
  return (
    <div onKeyDown={onKeyDown}>
      <Character movementDirection={"up"} movementSpeed={0} spriteImages={[]} />
      <p>`{}`</p>
    </div>
  );
}

export default App;
