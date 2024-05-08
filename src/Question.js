import React, { useState } from 'react';

function Question({ question, audioSrc, onRespond }) {
  const [selectedResponse, setSelectedResponse] = useState("");

  const handleResponse = (response) => {
    setSelectedResponse(response);
    onRespond(response);
  };

  return (
    <div className="question">
      <div>{question}</div>
      <audio controls src={audioSrc}></audio>
      <div className="btn-group">
        {['often', 'always', 'sometimes', 'never'].map((response) => (
          <button
            key={response}
            className={`button ${selectedResponse === response ? 'active' : ''}`}
            onClick={() => handleResponse(response)}
          >
            {response}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
