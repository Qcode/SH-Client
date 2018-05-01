import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const socket = io('http://localhost:8080');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
