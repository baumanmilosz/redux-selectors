import { createSelector } from 'reselect';

export const selectTasks = state => state.tasks.tasks;

export const selectCompletedTasks = createSelector(selectTasks, tasks => {
  return tasks.filter(task => task.completed);
});

export const selectCounter = state => state.counter.counter;
