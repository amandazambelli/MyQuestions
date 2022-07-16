import React from 'react';
import QuestionList from '../components/QuestionList';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function QuestionListPage() {
  const navigate = useNavigate();

  const goToNewQuestion = () => {
    console.log(navigate);
    navigate('/new-question');
  };

  return (
    <section className="list-page">
    <QuestionList />
    <button type="button" onClick={goToNewQuestion}>
      Nova Pergunta
    </button>
  </section>
  )
}
