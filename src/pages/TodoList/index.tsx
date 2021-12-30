import React from 'react';
import Footer from '@/pages/TodoList/Footer';
import AddTodo from '@/pages/TodoList/AddTodo';
import VisibleList from '@/pages/TodoList/VisibleList';

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
            <VisibleList />
            <Footer />
        </div>
    );
};

export default TodoList;
