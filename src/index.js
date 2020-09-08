import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import BudegetProvider from './providers/budegt.provider';



ReactDOM.render(
  <BudegetProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BudegetProvider>,
  document.getElementById('root')
);


