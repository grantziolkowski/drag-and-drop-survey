import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [jsonData, setJsonData] = useState({ questions: []});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0) {

      callback();
    }
  }, [errors]);


  const handleJsonChange = (event) => {
    event.persist();
    const jsonKey = event.target.name.replace('String', '');
    
    setErrors(validate({ ...values, [event.target.name]: event.target.value }));
    setValues(values => ({...values, [event.target.name]: event.target.value }));

    if (jsonKey) {
      try {
        const jsonValue = JSON.parse(event.target.value);
        setJsonData(values => ({ ...values, [jsonKey]: jsonValue }));
      } catch (e) {}
    }
  };

  return {
    handleJsonChange,
    values,
    errors,
    jsonData,
  }
};

export default useForm;