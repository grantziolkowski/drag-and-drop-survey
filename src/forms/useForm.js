import { useState, useEffect } from 'react';

const useForm = (callback, validate, defaultValues) => {
  const [values, setValues] = useState({});
  const [jsonData, setJsonData] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors]);

  const handleJsonChange = (event) => {
    event.persist();
    
    setErrors(validate({ ...values, [event.target.name]: event.target.value }));
    setValues(values => ({...values, [event.target.name]: event.target.value }));

    try {
      const jsonValue = JSON.parse(event.target.value);
      setJsonData(values => ({ ...jsonData, [event.target.name]: jsonValue }));
    } catch (e) { }
  };

  const handleFormValuesUpdate = (updatedValues) => {
    setValues(values => ({...values, ...updatedValues }));
  };

  return {
    handleJsonChange,
    handleFormValuesUpdate,
    values,
    errors,
    jsonData,
  }
};

export default useForm;