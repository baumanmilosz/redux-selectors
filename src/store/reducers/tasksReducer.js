const initState = {
  tasks: [
    {
      id: 1,
      title: 'Rent a car',
      darkMode: false,
      completed: true,
    },
    {
      id: 2,
      title: 'Wipe off the dust',
      darkMode: false,
      completed: false,
    },
    {
      id: 3,
      title: 'Buy present',
      darkMode: false,
      completed: true,
    },
    {
      id: 4,
      title: 'Clean the flat',
      darkMode: false,
      completed: false,
    },
    {
      id: 5,
      title: 'Pay bills',
      darkMode: false,
      completed: true,
    },
  ],
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tasksReducer;
