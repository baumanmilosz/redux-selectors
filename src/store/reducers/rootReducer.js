import { combineReducers } from 'redux';
import tasks, * as fromTasks from './tasks';
import { createSelector } from 'reselect';

const rootReducer = combineReducers({
  tasks,
});

export const selectTasks = state => fromTasks.selectTasks(state.tasks);

export const selectCompletedTasks = createSelector(selectTasks, tasks =>
  tasks.filter(task => task.completed),
);

export default rootReducer;
