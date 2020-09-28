import React from 'react';
import validate from './SurveyFormValidationRules';
import useForm from '../forms/useForm';
import './SurveyForm.css';

const SurveyForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
  } = useForm(submit, validate);

  function submit() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} noValidate>
        <div className='control'>
        <textarea
            className={`textarea ${errors.questions && 'is-error'}`}
            name='questions'
            onChange={handleChange}
            value={values.questions || []}
            placeholder='[{ "body": "Edit here with the body of your question text", "identifier": "Any optional identifier" }]'
            required
          />
          {errors.questions && (
            <p className='is-error'>{errors.questions}</p>
          )}
        </div>
        <button type='submit' className='button'>Submit Questions</button>
      </form>
    </div>
  )
}

export default SurveyForm;