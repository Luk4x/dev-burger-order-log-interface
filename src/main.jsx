import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Home from './containers/Home';
import Orders from './containers/Orders';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home />
        <Orders />
        <GlobalStyles />
    </React.StrictMode>
);
