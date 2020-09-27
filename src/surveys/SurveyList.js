import React from 'react';
import './SurveyList.css';

const SurveyList = ({ questions }) => {
  const onDragEnter = e => {
    console.log('drag enter');
    e.preventDefault();
    e.stopPropagation();
  };
  const onDragLeave = e => {
    console.log('drag leave');

    e.preventDefault();
    e.stopPropagation();
  };
  const onDragOver = e => {
    console.log('drag over');

    e.preventDefault();
    e.stopPropagation();
  };
  const onDrop = e => {
    console.log('drop');

    e.preventDefault();
    e.stopPropagation();
  };
  const onDrag = e => {
    console.log('grabbed', e);
  };

  return (
    <div className="survey-list"
      onDrop={e => onDrop(e)}
      onDragOver={e => onDragOver(e)}
      onDragEnter={e => onDragEnter(e)}
      onDragLeave={e => onDragLeave(e)}>
      <p>Drag survey questions up or down to reorder them.</p>
      <ol className="questions">
        {questions.map(q => {
          return (
            <li key={q.id}
              draggable="true"
              onDrag={e => onDrag(e)}>
                {q.body}
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default SurveyList;