const surveyReducer = (state, action) => {
  switch (action.type) {
    case 'REORDER':
      return { ...state, questions: state.questions.concat(action.question) };
    default:
      return state;
  }
};

export default surveyReducer;