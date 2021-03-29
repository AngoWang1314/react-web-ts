import React from 'react';
import Footer from '@/components/containers/Footer';
import AddTodo from '@/components/containers/AddTodo';
import VisibleTodoList from '@/components/containers/VisibleTodoList';

interface IProps {
    match: {
        params: {
            visibilityFilter: string
        }
    }
};

const TodoList: React.FC<IProps> = (props: IProps) => {
    console.log('page props:', props);

    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default TodoList;
