import React from 'react';
import { NavLink} from 'react-router-dom';

interface IProps {
    filter: string,
    children: React.ReactChild,
    onClick: React.MouseEventHandler,
};

const Link: React.FC<IProps> = ({ filter, children, onClick, }: IProps) => (
    <NavLink
        style={{
            marginLeft: '4px'
        }}
        activeStyle={{
            color: 'red'
        }}
        to={`/todolist/${ filter }`}
        onClick={onClick}
    >
        { children }
    </NavLink>
);

export default Link;
