import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';
import { registerSW } from 'virtual:pwa-register';

const intervalMS = 10 * 1000;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

const updateSW = registerSW({
    onRegistered(r: any) {
        console.log('onRegistered ->', r);

        if (!r) {
            return;
        }

        setInterval(() => {
            r.update();
        }, intervalMS);
    },
    onNeedRefresh() {
        console.log('need refresh ->', true);
    },
    onOfflineReady() {
        console.log('offline ->', true);
    },
});

console.log('updateSW ->', updateSW);
