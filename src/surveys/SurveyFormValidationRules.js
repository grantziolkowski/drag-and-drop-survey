export default function validate(values) {
  let errors = {};

  try {
    if (!values.questions) throw new Error();

    const questions = JSON.parse(values.questions);

    if (questions.length) {
      const invalidQuestion = questions.find(q => !q.body);
      if (invalidQuestion) errors.questions = 'Please fill in the body text of each question.';
    }
  } catch (e) {
    errors.questions = 'Please enter an array of valid JSON objects representing your questions';
  }

  return errors;
};