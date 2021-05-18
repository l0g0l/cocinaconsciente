import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/styles.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Config/routes/Routes";


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes/>
  </BrowserRouter>,
  document.getElementById('root')
);

