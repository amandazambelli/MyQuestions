import React from 'react';
import QuestionList from '../components/QuestionList';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function QuestionListPage() {
  const navigate = useNavigate();

  const goToNewQuestion = () => {
    navigate('/new-question');
  };

  return (
    <section>
    <QuestionList />
    <button className="btn-new-question" type="button" onClick={ goToNewQuestion }>
      Nova Pergunta
    </button>
  </section>
  )
}
