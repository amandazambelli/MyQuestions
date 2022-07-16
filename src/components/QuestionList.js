import React, { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';
import QuestionCard from './QuestionCard';

export default function QuestionList() {
  const { questions } = useContext(QuestionsContext);
  console.log(questions);
  return (
    <section>
      { questions.map((question, index) => (
        <QuestionCard key={ index } question={ question } />
      )) }
    </section>
  )
}
