import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Prompt } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Modal } from 'antd';

export interface IMain extends RouteComponentProps {
    login: {
        actionGetList: Function,
        list: {
            author: {
                loginname: string,
                avatar_url: string
            },
            author_id: string,
            content: string,
            create_at: string,
            good: boolean,
            id: string,
            last_reply_at: string,
            reply_count: number,
            tab: string,
            title: string,
            top: boolean,
            visit_count: number
        }[]
    }
}

const Main: React.FC<IMain> = ({ history, location, match, login }: IMain) => {
    const { list, actionGetList } = login;

    useEffect(() => {
        actionGetList();
    }, [actionGetList]);

    const [isSaved, setIsSaved] = useState(false);
    const config = {
        title: 'Modal',
        content: (
            <>
                Modal content
            </>
        ),
        onCancel: () => {
            if (history.action === 'POP') {
                history.goBack();
            } else {
                history.goForward();
            }
        },
        onOk: () => {
            setIsSaved(true);
            window.location.reload();
        }
    };
    const onPageLeave = (location: { pathname: string }) => {
        if (!isSaved) {
            Modal.confirm(config);
            return false;
        }

        return true;
    };

    return (
        <div>
            {
                list.map((item, index) => {
                    return (
                        <div key={index}>{item.title}</div>
                    );
                })
            }
            <Prompt
                when={true}
                message={onPageLeave}
            />
        </div>
    );
};

export default inject('login')(observer(Main));
