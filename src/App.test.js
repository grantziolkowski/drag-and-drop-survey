import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders default questions data', () => {
  const { queryAllByText } = render(<App />);
  const elements = queryAllByText(/Please update this placeholder question body or add another question with a 'body' field./i);
  expect(elements.length).toEqual(2);
});
