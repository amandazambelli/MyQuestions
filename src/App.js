import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewQuestionPage from './pages/NewQuestionPage';
import QuestionListPage from './pages/QuestionListPage';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <main className="App">
      <header>
        <section>
          <h3 onClick={ goToHome }>Trybe Questions</h3>
        </section>
      </header>
      <section className="routes">
        <Routes>
          <Route path="/new-question" element={ <NewQuestionPage /> } />
          <Route path="/" element={ <QuestionListPage /> } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
