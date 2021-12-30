import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { message } from 'antd';
import styles from './index.module.less';

interface ILogin extends RouteComponentProps {
    login: {
        username: string,
        password: string,
        list: [],
        actionGetList: (params: any, callbacklist: any, callbackerror: any) => void,
    }
};

const Login: React.FC<ILogin> = ({ history, location, match, login }: ILogin) => {
    const [list, setList] = useState(login.list);

    useEffect(() => {
        login.actionGetList({
        }, (list: any) => {
            setList(list);
        }, (ret: any) => {
            message.warning('登录失败');
        });
    });

    return (
        <div className={styles.login}>
            {
                list.map((item: any, index: number) => {
                    return (
                        <div key={index} className={styles.item}>{item.title}</div>
                    );
                })
            }
        </div>
    );
};

export default inject('login')(observer(Login));
