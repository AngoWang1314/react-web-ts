import React from 'react';
import loadable from '@loadable/component';

import styles from './App.module.less';

import RenderRoute from '@/components/presentations/RenderRoute';
const Child = loadable(() => import('@/pages/Child'));
const TodoList = loadable(() => import('@/pages/TodoList'));
const routes = [
  {
    path: '/subapp/x/y/child',
    title: '子应用',
    component: Child,
    exact: true,
    auth: false,
    cache: true
  },
  {
    path: '/todolist/:visibilityFilter?',
    title: 'todolist',
    component: TodoList,
    exact: true,
    auth: false,
    cache: true
  },
];
const defaultRoute = '/subapp/x/y/child';

export interface IApp {
}
const App: React.FC<IApp> = (props: IApp) => {
  return (
    <div className={styles.App}>
      <RenderRoute routes={routes} defaultRoute={defaultRoute} />
    </div>
  );
};

export default App;
