import React, { useState } from 'react';
import Question from './Question';

function App() {
  const questions = [
    { id: 1, text: "I was able to choose the menstrual materials I most wanted to use.", audio: "/audio/question1.mp3" },
    { id: 2, text: "I was able to choose the menstrual materials I most wanted to use.", audio: "/audio/question1.mp3" },

    // 他の質問も同様に追加
  ];

  const [responses, setResponses] = useState({});

  const handleResponse = (questionId, response) => {
    setResponses(prev => ({ ...prev, [questionId]: response }));
  };

  return (
    <div>
      {questions.map(question => (
        <Question
          key={question.id}
          question={question.text}
          audioSrc={question.audio}
          onRespond={(response) => handleResponse(question.id, response)}
        />
      ))}
    </div>
  );
}

export default App;
