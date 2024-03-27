import { useState } from "react";

const DICTIONARY = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [dictionary] = useState(DICTIONARY);
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const word = formData.get("word").toLowerCase()
    

    const definition = dictionary.find((w) => w.word.toLowerCase() === word);
    setDefinition(definition?.meaning || "Word not found in the dictionary.");
  };
  return (
    <>
      <header>
        <h1>Dictionary App</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Search for a word..."
          name="word"
        />
        <button type="submit">Search</button>
      </form>
      <h2>Definition:</h2>

      {definition && <p>{definition}</p>}
    </>
  );
}

export default App;
