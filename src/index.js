import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Game } from "./Game";

function App() {
  return <Game />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
