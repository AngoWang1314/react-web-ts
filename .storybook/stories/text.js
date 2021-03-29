import React from 'react';
import Text from '../../src/components/Text';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  text: 'xxx',
};
