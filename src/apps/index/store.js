import { createStore, applyMiddleware } from 'redux';
import myredux from '@/stores/myredux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const preloadedState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
};

export default createStore(myredux, preloadedState, applyMiddleware(
    thunk,
    loggerMiddleware
));
