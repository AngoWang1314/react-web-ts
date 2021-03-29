import { getTodos, toggleTodo } from '@/stores/redux/action';
import TodoList from '@/components/containers/TodoList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';

interface ITodo {
    id: number,
    text: string,
    completed: boolean,
}
interface IMapStateToProps {
    todos: ITodo[],
    visibilityFilter: string
};

const getVisibilityFilter = (state: IMapStateToProps) => state.visibilityFilter;
const myGetTodos = (state: IMapStateToProps) => state.todos;
const getVisibleTodos = createSelector(
    [ myGetTodos, getVisibilityFilter ],
    (todos: ITodo[], filter: string): ITodo[] => {
        switch (filter) {
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_ALL':
            default:
                return todos;
        }
    }
);

const mapStateToProps = (state: IMapStateToProps): {todos: ITodo[]} => ({
    todos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch): {dispatch: Dispatch, getTodos: Function, toggleTodo: Function} => ({
    dispatch,
    getTodos: (params: object) => getTodos(params),
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
