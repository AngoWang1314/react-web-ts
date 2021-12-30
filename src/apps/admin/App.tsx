import React from 'react';
import loadable from '@loadable/component';

import styles from './App.module.less';

import RenderRoute from '@/components/RenderRoute';
const SubAPP = loadable(() => import('@/pages/SubAPP'));
const Login = loadable(() => import('@/pages/Login'));
const Main = loadable(() => import('@/pages/Main'));
const Other = loadable(() => import('@/pages/Other'));
const routes = [
  {
    path: '/login',
    title: '登录页',
    component: Login,
    exact: true,
    auth: false,
    cache: true
  },
  {
    path: '/main',
    title: '主页',
    component: Main,
    exact: false,
    auth: true,
    cache: true
  },
  {
    path: '/other',
    title: '其它页',
    component: Other,
    exact: true,
    auth: false,
    cache: true
  },
  {
    path: '/subapp/:appId/:appName',
    title: '子应用',
    component: SubAPP,
    exact: false,
    auth: true,
    cache: true
  },
];
const defaultRoute = '/login';

interface IApp {
};
const App: React.FC<IApp> = (props: IApp) => {
  return (
    <div className={styles.App}>
      <RenderRoute routes={routes} defaultRoute={defaultRoute} />
    </div>
  );
};

export default App;
