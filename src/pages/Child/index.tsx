import React from 'react';
import { Button } from 'antd';

export interface IChild {
}

const Child: React.FC<IChild> = (props: IChild) => {
  return (
    <div>
      <span>Child</span>
      <Button type="primary">Child</Button>
    </div>
  );
};

export default Child;
