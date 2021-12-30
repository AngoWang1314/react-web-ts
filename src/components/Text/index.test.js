import React from 'react';
import Text from '.';
import { render, screen } from '@testing-library/react';

test('render text component', () => {
  render(<Text text={'text'} />);
  const textElement = screen.queryByText(/text/);
  expect(textElement).toBeInTheDocument();
});
