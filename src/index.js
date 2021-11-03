import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {Context} from "./Context/Context.js";
ReactDOM.render(
  <React.StrictMode>
  <Context>
    <App />
  </Context>
  </React.StrictMode>,
  document.getElementById('root')
);


