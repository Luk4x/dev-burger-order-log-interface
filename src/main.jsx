import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Routes from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routes />
        <GlobalStyles />
    </React.StrictMode>
);
