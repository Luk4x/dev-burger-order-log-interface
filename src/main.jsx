import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Home from './containers/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home />
        <GlobalStyles />
    </React.StrictMode>
);
