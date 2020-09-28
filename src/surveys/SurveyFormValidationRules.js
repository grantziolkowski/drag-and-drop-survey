export default function validate(values) {
  console.log('validate ', values)
  let errors = {};

  try {
    if (!values.questionsString) throw new Error();

    const questions = JSON.parse(values.questionsString);

    if (questions.length) {
      const invalidQuestion = questions.find(q => !q.body);
      if (invalidQuestion) errors.questions = 'Please fill in the body text of each question.';
    }
  } catch (e) {
    errors.questions = 'Please enter an array of JSON objects representing your questions';
  }

  return errors;
};