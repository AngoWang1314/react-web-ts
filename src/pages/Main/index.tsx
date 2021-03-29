import React, { useState, useEffect } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Modal } from 'antd';

export interface IMain extends RouteComponentProps {
  Item: {
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

const Main: React.FC<IMain> = ({ history, location, match, Item }: IMain) => {
  const { list, actionGetList } = Item;

  const [name] = useState('Main');

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
  const onPageLeave = (location: {pathname: string}) => {
    if (!isSaved) {
      Modal.confirm(config);
      return false;
    }

    return true;
  };

  return (
    <div>
      <div>{name}</div>
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

export default inject('Item')(observer(Main));
