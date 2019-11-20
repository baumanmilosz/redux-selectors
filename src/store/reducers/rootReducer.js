import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
  counter,
  tasks,
});

export default rootReducer;
