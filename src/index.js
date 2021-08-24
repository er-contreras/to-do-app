import React from 'react';
import ReactDom from 'react-dom';
// Component file
import TodoContainer from './components/TodoContainer';
// Stylesheet
import './App.css';

ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
