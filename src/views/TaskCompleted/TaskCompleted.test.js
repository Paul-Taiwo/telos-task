import React from 'react';
import ReactDOM from 'react-dom';
import TaskCompleted from "./TaskCompleted";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskCompleted />, div);
  ReactDOM.unmountComponentAtNode(div);
});
