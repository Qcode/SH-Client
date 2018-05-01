import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

openSocket('http://localhost:8080');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
