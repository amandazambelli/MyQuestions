import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import QuestionsContext from '../context/QuestionsContext';

export default function QuestionCard({ question }) {

  const { questions } = useContext(QuestionsContext);
  const [claps, setClaps] = useState(0);

  function handleClickClap(CurrQuestionId) {
    const questionClap = questions.find((question) => question.id === CurrQuestionId);
    if (questionClap.claps === 0) {
      const sumClaps = questionClap.claps + 1;
      setClaps(sumClaps);
    }
    console.log(claps)
    if (questionClap.claps === 1) {
      const zero = 0;
      setClaps(zero);
    }
  }

  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://cdn.pixabay.com/photo/2020/12/16/04/16/dinosaur-5835666_960_720.jpg"
          alt=""
        />
        { question.name }
      </header>
      <p className="question-card-body">{question.question}</p>

      <p className="question-card-claps">
        <span
          role="img"
          aria-label="increase-claps"
          onClick={() => handleClickClap(question.id)}
        >
          👏
        </span>
        { claps } Palmas
      </p>
    </section>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired
  }).isRequired
};
