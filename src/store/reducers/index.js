const initState = {
  tasks: [
    {
      id: 1,
      title: 'Task1',
      darkMode: false,
    },
    {
      id: 2,
      title: 'Task2',
      darkMode: false,
    },
    {
      id: 3,
      title: 'Task3',
      darkMode: false,
    },
    {
      id: 4,
      title: 'Task4',
      darkMode: false,
    },
    {
      id: 5,
      title: 'Task5',
      darkMode: false,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
