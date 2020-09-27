import React from 'react';
import './SurveyList.css';

const SurveyList = ({ questions }) => {
return (
  <div className="survey-list">
    <ol className="questions">
      {questions.map(q => {
        return (
          <li key={q.id}>{q.body}</li>
        )
      })}
    </ol>
  </div>
);
};

export default SurveyList;