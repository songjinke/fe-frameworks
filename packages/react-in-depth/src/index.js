import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DemoSetStateFunction from './components/DemoSetStateFunction';
import reportWebVitals from './reportWebVitals';

// Theme context
export const ThemeContext = React.createContext();

// User context
export const UserContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <DemoSetStateFunction />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
