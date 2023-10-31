import React from 'react';
import ReactDOM from 'react-dom/client'

import { HashRouter } from 'react-router-dom';
import App from "./components/App.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
