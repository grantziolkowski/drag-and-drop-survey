import React, { useReducer } from 'react';

import SurveyForm from './surveys/SurveyForm';
import SurveyList from './surveys/SurveyList';
import surveyReducer from './reducers/SurveyReducer';
import './App.css';

const questions = [{
  body: "Please update this placeholder question body or add another question with a 'body' field.",
  identifier: 'SAMPLE-identifier'
}];

function App() {
  const [data, dispatch] = useReducer(
    surveyReducer, { questions }
  );

  return (
    <div className='app'>
      <div className='instructions'>
        Enter and edit JSON data for your survey's questions. Once entered, you can drag and drop a question below to move
          it up or down in order.
      </div>
      <SurveyForm data={data} dispatch={dispatch} />

      <SurveyList data={data} dispatch={dispatch} />
    </div>
  );
}

export default App;
