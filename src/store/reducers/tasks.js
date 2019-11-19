const initState = {
  tasks: [
    {
      id: 1,
      title: 'Task1',
      darkMode: false,
      completed: true,
    },
    {
      id: 2,
      title: 'Task2',
      darkMode: false,
      completed: false,
    },
    {
      id: 3,
      title: 'Task3',
      darkMode: false,
      completed: true,
    },
    {
      id: 4,
      title: 'Task4',
      darkMode: false,
      completed: false,
    },
    {
      id: 5,
      title: 'Task5',
      darkMode: false,
      completed: true,
    },
  ],
};

const tasks = (state = initState, action) => {
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

export const selectTasks = state => {
  return state.tasks;
};

export default tasks;
