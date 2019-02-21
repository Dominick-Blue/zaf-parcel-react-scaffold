import React from "react";
import ReactDOM from "react-dom";

import client from './lib/client'
import App from './components/App';
import './scss/app.scss'

let app = document.getElementById("app");

client.on('app.registered', () => {
  ReactDOM.render(<App/>, app);
});
