export default function validate(values) {
  let errors = {};

  try {
    if (!values.questions) throw new Error();

    JSON.parse(values.questions);
  } catch (e) {
    errors.questions = 'Please enter a valid JSON representation of your questions';
  }

  return errors;
};