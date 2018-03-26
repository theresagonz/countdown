import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// const $ = require('jquery');
// window.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
