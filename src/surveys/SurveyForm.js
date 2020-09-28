import React from 'react';
import validate from './SurveyFormValidationRules';
import useForm from '../forms/useForm';
import './SurveyForm.css';

const SurveyForm = ({ data, dispatch }) => {
  const questionsString = JSON.stringify(data.questions);

  const {
    values,
    handleJsonChange,
    errors,
    jsonData,
  } = useForm(onValidQuestionsUpdate, validate);

  function onValidQuestionsUpdate() {
    if (jsonData && jsonData.questions.length) {
      dispatch({ type: 'UPDATE_QUESTIONS', questions: jsonData.questions });
    }
  }

  return (
    <div className='form-container'>
      <form noValidate>
        <div className='control'>
          <textarea
              className={`textarea ${errors.questions && 'is-error'}`}
              name='questionsString'
              onChange={handleJsonChange}
              value={values.questionsString || questionsString }
              placeholder='[{ "body": "Edit here with the body of your question text", "identifier": "Any optional identifier" }]'
              required
            />
          {errors.questions && (
            <p className='is-error'>{errors.questions}</p>
          )}
        </div>
      </form>
    </div>
  )
}

export default SurveyForm;