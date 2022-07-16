import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewQuestionPage from './pages/NewQuestionPage';
import QuestionListPage from './pages/QuestionListPage';
// import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
  /* const history = useHistory();

  const goToHome = () => {
    history.push('/');
  } */
  return (
    <main className="App">
      <header>
        <section>
          <h3>Trybe Questions</h3>
        </section>
      </header>
      <section>
        <Routes>
          <Route path="/" element={ <NewQuestionPage /> } />
          <Route path="/" element={ <QuestionListPage /> } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
