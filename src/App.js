import React from 'react';
import SurveyForm from './surveys/SurveyForm';
import SurveyList from './surveys/SurveyList';
import './App.css';

const questions = [
  {
    id: 1,
    body: 'Is there enough water content in the soil?',
  },
  {
    id: 2,
    body: 'Is there a freshwater source nearby?',
  },
  {
    id: 3,
    body: 'Are there currently any crops planted here?',
  }
];

function App() {
  return (
    <div className="App">
      <header>
        Survey
      </header>
      <SurveyForm />
      <SurveyList questions={questions} />
    </div>
  );
}

export default App;
