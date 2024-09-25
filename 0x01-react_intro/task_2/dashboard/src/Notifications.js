import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function close() {
    console.log("Close button has been clicked");
}

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is a list of notifications</p>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button
            style={{position: 'absolute', top: '24px', right: '18px', border: 'none', background: 'none', padding: '0'}}
            aria-label='Close'
            onClick={close()}>
                <img src={closeIcon} style={{display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }}  width="15px"></img>
            </button>
        </div>
    )
}

export default Notifications;