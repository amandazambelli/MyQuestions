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
      <header className="main-header">
        <section className="main-header-title">
          <h1 onClick={ goToHome }>My Questions</h1>
        </section>
      </header>
      <section className="main-section">
        <Routes>
          <Route path="/new-question" element={ <NewQuestionPage /> } />
          <Route path="/" element={ <QuestionListPage /> } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
