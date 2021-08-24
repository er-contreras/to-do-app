import React from 'react';
import ReactDom from 'react-dom';
// Component file
import TodoContainer from './functionBased/components/TodoContainer';
// Stylesheet
import './functionBased/App.css';

ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
