import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {AppRoutes} from "./utils/AppRoutes";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <AppRoutes/>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
