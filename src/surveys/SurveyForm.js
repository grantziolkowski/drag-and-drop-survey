import React from 'react';
import validate from './SurveyFormValidationRules';
import useForm from '../forms/useForm';

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
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="control">
        <input
            className={`input ${errors.questions && 'is-error'}`}
            type="textarea"
            name="questions"
            onChange={handleChange}
            value={values.questions || ''}
            required
          />
          {errors.questions && (
            <p className="is-error">{errors.questions}</p>
          )}
        </div>
        <button type="submit" className="button">Submit Questions</button>
      </form>
    </div>
  )
}

export default SurveyForm;