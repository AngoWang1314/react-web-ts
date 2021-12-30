import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import KeepAlive, { AliveScope } from 'react-activation';

interface IRouteGuide {
  path: string,
  title: string,
  component: any,
  exact: boolean,
  auth: boolean,
  cache: boolean
}
const RouteGuide: React.FC<IRouteGuide> = (props: IRouteGuide) => {
  const { title = '', component: Wrapper, auth = false, cache = false, ...rest } = props;
  
  if (auth && !Boolean(window.localStorage.getItem('token'))) {
    window.location.hash = '/login';
  }

  document.title = title;
  return (
    <AliveScope>
      <KeepAlive when={cache}>
        <Route {...rest} render={props => <Wrapper {...props} />} />
      </KeepAlive>
    </AliveScope>
  );
};

export interface IRenderRoute {
  routes: IRouteGuide[],
  defaultRoute: string
}
const RenderRoute: React.FC<IRenderRoute> = (props: IRenderRoute) => {
  const {routes, defaultRoute} = props;

  return (
    <Router>
      <Switch>
        {
          routes.map(route => (
            <RouteGuide key={route.path} {...route} />
          ))
        }
        <Redirect to={defaultRoute} />
      </Switch>
    </Router>
  );
};

export default RenderRoute;
