import React from 'react';

interface IProps {
    completed: boolean,
    onClick: React.MouseEventHandler,
    text: string,
};

const Todo: React.FC<IProps> = ({ completed, onClick, text, }: IProps) => (
    <li
        style={{
            cursor: 'pointer',
            textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onClick}
    >
        {text}
    </li>
);

export default Todo;
