const initState = {
  tasks: [
    {
      id: 1,
      title: 'Rent a car',
      darkMode: true,
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
      darkMode: true,
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
    case 'CHANGE_MODE':
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === action.payload) {
              return {
                ...task,
                darkMode: !task.darkMode,
              };
            }
            return task;
          }),
        ],
      };
    default:
      return state;
  }
};

export default tasksReducer;
