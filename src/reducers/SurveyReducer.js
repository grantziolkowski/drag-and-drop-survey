function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

const surveyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, questions: state.questions.concat(action.question) };
    case 'REORDER':
      return { ...state, questions: array_move(state.questions, action.payload.fromIndex, action.payload.toIndex)};
    default:
      return state;
  }
};

export default surveyReducer;