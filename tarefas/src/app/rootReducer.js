import { combineReducers } from "redux";
import tasksReducer from "../features/tasks/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
