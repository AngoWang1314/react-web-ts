import React from 'react';

interface IProps {
  text: string
}

const Text: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <span>{props.text}</span>
    </div>
  );
};

export default Text;
