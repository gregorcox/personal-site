import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
