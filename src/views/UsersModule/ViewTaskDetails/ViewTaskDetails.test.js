import React from 'react';
import ReactDOM from 'react-dom';
import ViewTaskDetails from './ViewTaskDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewTaskDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
