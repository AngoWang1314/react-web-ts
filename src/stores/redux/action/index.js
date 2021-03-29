import axios from 'axios';

export const getTodos = params => {
    return (dispatch, getState) => {
        return dispatch(doGetTodos(params));
    };
};

export const doGetTodos = (params) => {
    return (dispatch, getState) => {
        return axios('https://www.xuebabiji.club/api/common/getIndex').then((response) => {
            const {data: {data: {indexes: {area}}}} = response;

            dispatch({
                type: 'SET_TODOS',
                todos: area
            });
        }, (error) => {
            console.log(error);
        });
    };
};

export const setTodos = todos => ({
    type: 'SET_TODOS',
    todos
});

export const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
