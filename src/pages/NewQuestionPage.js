import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';
import './newquestion.css';

export default function NewQuestionPage() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const { addNewQuestion } = useContext(QuestionsContext);

  const navigate = useNavigate();

  const goToHome = (name, setName) => {
    navigate('/');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = 0;

    const newQuestion = {
      id,
      name: name,
      question: question,
      claps: 0
    };

    addNewQuestion(newQuestion);

    goToHome();
  }

  const handleChange = (event) => {
    if (event.target.name === 'question') {
      setQuestion(event.target.value);
    }
    if (event.target.name === 'user') {
      setName(event.target.value);
    }
  }

  return (
    <section className="newquestion-container">
      <form onSubmit={ handleFormSubmit } className="newquestion-form">
        <label htmlFor="question">
          Digite a pergunta:
          <textarea
          name="question"
          value={ question }
          onChange={ handleChange }
          placeholder="Digite aqui a pergunta"
          id="question"
          cols="30"
          rows="10"

          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
          name="user"
          type="text"
          value={ name }
          onChange={ handleChange }
          placeholder="Digite aqui o nome"
          id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
