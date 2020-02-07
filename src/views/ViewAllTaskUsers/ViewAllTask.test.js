import React from 'react';
import ReactDOM from 'react-dom';
import ViewAllTask from './ViewAllTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewAllTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});
