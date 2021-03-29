const todos = (state = [], action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return action.todos.map(
                item => ({
                    id: +item.areaId,
                    text: item.areaName,
                    completed: false
                })
            );
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(
                todo => todo.id === action.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            );
        default:
            return state;
    }
};

export default todos;
