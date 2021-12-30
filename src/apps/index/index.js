import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { AliveScope } from 'react-activation';

import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVital from './reportWebVital';

let root = document.getElementById('root-sub');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AliveScope>
          <App />
        </AliveScope>
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVital(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVital();

// 监听卸载事件
window.addEventListener('unmount', () => {
  console.log('unmount');

  ReactDOM.unmountComponentAtNode(root);
  window.removeEventListener('unmount');
});
