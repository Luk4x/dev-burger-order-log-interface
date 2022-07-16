import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './containers/Home';
import Orders from './containers/Orders';

const Routes = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
            </RouterRoutes>
        </Router>
    );
};

export default Routes;
