import { combineReducers } from 'redux';
import todos from '@/stores/redux/reducer/todos';
import visibilityFilter from '@/stores/redux/reducer/visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
});
