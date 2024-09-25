import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';


const element = (
    <>
        <App />
        <div className='root-notifications'>
            <Notifications />
        </div>
    </>
);

ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
