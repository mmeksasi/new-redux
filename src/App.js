import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  counterSelector
} from "./redux/reducers/Counter";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Press to add
      </button>
      <div>{counter.value}</div>
    </div>
  );
}

export default App;
