import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';
import HomePage from './pages/home/HomePage';
import { ErrorBoundary } from 'react-error-boundary';
import ResumePage from './pages/resume/ResumePage';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/:username',
                element: <ResumePage />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </ErrorBoundary>
);
