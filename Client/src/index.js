import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/styles.scss';
import App from './App';
import Routes from "./Config/routes/Routes";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

