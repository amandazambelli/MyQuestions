import React, { useState } from 'react';
import QuestionsContext from './QuestionsContext';

function QuestionsProvider({ children }) {
  const INITIAL_STATE = [
    {
      id: 1,
      name: 'Primeiro',
      question: 'Primeira pergunta',
      claps: 0
    }
  ];

  const [ questions, setQuestions ] = useState(INITIAL_STATE);

  const contextState = {
    questions,
    addNewQuestion: (question) => {
      setQuestions([
        ...questions,
        question
      ]);
    }
  };

  return (
    <QuestionsContext.Provider value={ contextState }>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
