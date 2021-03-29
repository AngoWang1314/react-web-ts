import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {inject, observer} from 'mobx-react';

import { Button } from 'antd';

interface ILogin extends RouteComponentProps {
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

@inject('Item')
@observer
class Login extends Component<ILogin> {
  state = {
    name: 'Login'
  }

  componentDidMount() {
    this.props.Item.actionGetList();
  }

  render() {
    const { history, location, match, Item } = this.props;
    const { list } = Item;

    return (
      <div>
        <Button type="primary">button</Button>
        <div>{this.state.name}</div>
        {
          list.map((item, index: number) => {
            return (
              <div key={index}>{item.title}</div>
            );
          })
        }
      </div>
    );
  }
}

export default Login;
