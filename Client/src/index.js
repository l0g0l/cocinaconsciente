import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Config/routes/Routes";

import './Sass/styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

