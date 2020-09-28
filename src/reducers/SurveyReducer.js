function arrayMove(arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
      var k = newIndex - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);

  return arr;
};

const surveyReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUESTIONS':
      return { ...state, questions: action.questions };
    case 'REORDER':
      const questionsToUpdate = [].concat(state.questions);
      return { ...state, questions: arrayMove(questionsToUpdate, action.fromIndex, action.toIndex)};
    default:
      return state;
  }
};

export default surveyReducer;