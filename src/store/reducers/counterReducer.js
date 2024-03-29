const initState = {
  counter: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
