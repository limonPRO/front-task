
import './App.css';
import { useState } from 'react';

function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    // Append the clicked letter to the outputString
    const newString = outputString + letter;
    setOutputString(newString);

    // Check for consecutive letters
    const regex = new RegExp(`(${letter}){3,}`, 'g');
    const replacedString = newString.replace(regex, '_');
    setOutputString(replacedString);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
}

export default App;
