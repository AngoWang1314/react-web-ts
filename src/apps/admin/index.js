import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import { AliveScope } from 'react-activation';

import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVital from './reportWebVital';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router>
        <AliveScope>
          <App />
        </AliveScope>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVital(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVital();

// 全局变量保存用户信息和公共索引数据
window.global = {
  indexes: {
  },
  userInfo: {
  }
};

// 随便读取，只能通过事件改变全局数据
window.addEventListener('changeGlobal', (e) => {
  setTimeout(() => {
    window.global = e.detail;
  }, 0);
});

// let e = new CustomEvent('changeGlobal', {
//   detail: {
//     indexes: {
//     },
//     userInfo: {
//     }
//   }
// });
// window.dispatchEvent(e);
