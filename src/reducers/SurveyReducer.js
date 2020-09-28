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
      console.log('update action', action);
      console.log('new state', { ...state, questions: action.questions });
      return { ...state, questions: action.questions };
    case 'REORDER':
      return { ...state, questions: arrayMove(state.questions, action.fromIndex, action.toIndex)};
    default:
      return state;
  }
};

export default surveyReducer;