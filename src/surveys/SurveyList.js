import React from 'react';
import './SurveyList.css';

const SurveyList = ({ data, dispatch }) => {
  const { questions } = data;

  const onDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    const fromIndex = parseInt(e.dataTransfer.getData("text"));
    const toIndex = parseInt(_getIndexFromClassName(e.target));

    dispatch({ type: 'REORDER', fromIndex, toIndex });
    e.dataTransfer.clearData();
  };
  const onDrag = e => {
    e.persist()
    const index = _getIndexFromClassName(e.target);

    e.dataTransfer.setData("text", index);
  };

  const _getIndexFromClassName = (el) => {
    return el.id.replace('question-item-', '');
  }

  return (
    <div className="survey-list"
      onDrop={e => onDrop(e)}
      onDragOver={e => onDragOver(e)}>
      <ul className="questions">
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
      </ul>
    </div>
  );
};

export default SurveyList;