import React from 'react';
import './SurveyList.css';

const SurveyList = ({ data, dispatch }) => {
  const { questions } = data;

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

    const fromIndex = e.dataTransfer.getData("text");
    const toIndex = parseInt(e.target.id.replace('question-item-', ''));
    dispatch({ type: 'REORDER', fromIndex, toIndex });
    e.dataTransfer.clearData();
  };
  const onDrag = e => {
    e.persist()
    const index = parseInt(e.target.id.replace('question-item-', ''));

    e.dataTransfer.setData("text", index);
  };

  return (
    <div className="survey-list"
      onDrop={e => onDrop(e)}
      onDragOver={e => onDragOver(e)}
      onDragEnter={e => onDragEnter(e)}
      onDragLeave={e => onDragLeave(e)}>
      <ol className="questions">
        {questions.map((q, i) => {
          return (
            <li key={i}
              id={`question-item-${i}`}
              draggable="true"
              onDragStart={e => onDrag(e)}>
                {q.body}
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default SurveyList;