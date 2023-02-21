import { useState, useEffect } from "react";
import "./App.css";
import Decks from "./components/Decks";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Decks />
      <Form />
    </div>
  );
}

export default App;
