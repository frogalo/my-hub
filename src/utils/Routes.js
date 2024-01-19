import React from 'react';
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Login from '../views/user/Login';
import ProtectedRoute from './ProtectedRoute';
import Store from "../api/store";
import {ErrorBoundary} from "react-error-boundary";

const ErrorFallback = ({ error }) => (
    <div>
        <h1>Unexpected Application Error!</h1>
        <p>{error.message}</p>
    </div>
);

const Routes = () => {
    const token = Store.getToken();

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: '/service',
            element: <div>Service Page</div>,
        },
        {
            path: '/about-us',
            element: <div>About Us</div>,
        },
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element: <ProtectedRoute/>,
            children: [
                {
                    path: '',
                    element: <div>User Home Page</div>,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard/>,
                },
                {
                    path: 'logout',
                    element: <div>Logout</div>,
                },
            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: '/',
            element: <div>Home Page</div>,
        },
        {
            path: '/login',
            element: <Login/>,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return (
        <RouterProvider router={router}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
        </RouterProvider>
    );
};

export default Routes;