import React from 'react';
import PropTypes from 'prop-types';
import './questioncard.css';

export default function QuestionCard({ question }) {

  function handleClickClap(questionId) {
    console.log('TODO: increment claps in the question on the questionList inside of the global state');
  }

  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://i.pinimg.com/564x/fe/43/dd/fe43dde6d650b6d31ab47a1e01714b65.jpg"
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
        {question.claps} Palmas
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
