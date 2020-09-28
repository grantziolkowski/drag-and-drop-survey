import React, { useReducer } from 'react';

import SurveyForm from './surveys/SurveyForm';
import SurveyList from './surveys/SurveyList';
import surveyReducer from './reducers/SurveyReducer';
import './App.css';

const questions = [];

function App() {
  const [data, dispatch] = useReducer(
    surveyReducer, { questions }
  );

  return (
    <div className="app">
      <SurveyForm />
      <div className="instructions">
        <div>
          Enter JSON data for your survey's questions. Once entered, you can drag and drop a question below to move
           it up or down in order.
        </div>
        <div>You will be able to edit your array of survey questions at any time. Each question data must have a "body" field of text.</div>
      </div>

      <SurveyList data={data} dispatch={dispatch} />
    </div>
  );
}

export default App;
