import React from "react";
import "./App.css";

import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
