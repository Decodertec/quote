import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [firstPText, setFirstPText] = useState("");
  const [secondPText, setSecondPText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSecondPText(firstPText); // Copy the text from the first p element to the second p element
    setFirstPText(inputText); // Set the input text as the new text for the first p element
    setInputText(""); // Clear the input text
  };

  const handleReset = () => {
    setInputText("");
    setFirstPText("");
    setSecondPText("");
  };
  return (
    <div className="outer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>Output1: {firstPText}</p>
        <p>Output2: {secondPText}</p>
      </div>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
