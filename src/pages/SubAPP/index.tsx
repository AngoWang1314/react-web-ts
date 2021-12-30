import React, { useEffect } from 'react';
import importHTML from 'import-html-entry';

interface ISubAPP {
};

const SubAPP: React.FC<ISubAPP> = (props: ISubAPP) => {
  useEffect(() => {
    // 挂载前卸载其它应用
    let e = new CustomEvent('unmount', {
      detail: {
        indexes: {
        },
        userInfo: {
        }
      }
    });
    window.dispatchEvent(e);

    importHTML('/index/index.html')
    .then(res => {
      let subApp = document.querySelector('#subapp');
      if(subApp) {
        subApp.innerHTML = res.template;

        res.execScripts().then(exports => {
          console.log('exports', exports);

          // 通过window.global共享父子应用依赖的数据
        });
      }
    });
  });

  return (
    <div id="subapp"></div>
  );
};

export default SubAPP;
