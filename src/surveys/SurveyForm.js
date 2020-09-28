import React, { useEffect } from 'react';
import validate from './SurveyFormValidationRules';
import useForm from '../forms/useForm';
import './SurveyForm.css';

const SurveyForm = ({ data, dispatch }) => {
  useEffect(() => {
    handleFormValuesUpdate({questions: JSON.stringify(data.questions)})
  }, [data.questions]);

  const {
    values,
    handleJsonChange,
    handleFormValuesUpdate,
    errors,
    jsonData,
  } = useForm(onValidQuestionsUpdate, validate, {question: []});


  function onValidQuestionsUpdate() {
    if (jsonData && jsonData.questions) {
      dispatch({ type: 'UPDATE_QUESTIONS', questions: jsonData.questions });
    }
  }

  return (
    <div className='form-container'>
      <form noValidate>
        <div className='control'>
          <textarea
              className={`textarea ${errors.questions && 'is-error'}`}
              name='questions'
              onChange={handleJsonChange}
              value={values.questions}
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