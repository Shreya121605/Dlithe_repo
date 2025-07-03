
import React, { useState } from 'react';

function Quiz() {
  const questions = ['Q1: HTML full form?', 'Q2: CSS full form?'];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <p>{questions[index]}</p>
      <button onClick={() => setIndex(index - 1)} disabled={index === 0}>Previous</button>
      <button onClick={() => setIndex(index + 1)} disabled={index === questions.length - 1}>Next</button>
    </div>
  );
}

export default Quiz;