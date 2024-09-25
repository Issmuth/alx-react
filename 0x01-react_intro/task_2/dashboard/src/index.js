import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Notifications />, document.getElementById('root-notifications'));

reportWebVitals();
