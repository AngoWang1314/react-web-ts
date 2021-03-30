import React, { /*useState, useReducer, useContext*/ } from 'react';
import Todo from '@/components/presentations/Todo';
import useFirstMounted from '@/hooks/useFirstMounted';
import { Dispatch } from 'redux';

interface IProps {
    todos: {
        completed: boolean,
        text: string,
        id: number
    }[],
    dispatch: Dispatch,
    getTodos: Function,
    toggleTodo: Function
};

const TodoList: React.FC<IProps> = ({ todos, dispatch, getTodos, toggleTodo }: IProps) => {
    useFirstMounted() && todos.length === 0 && dispatch(getTodos({count: 10, page: 1}));

    return (
        <ul>
            {
                todos.map(
                    todo => (
                        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                    )
                )
            }
        </ul>
    );
};

export default TodoList;
