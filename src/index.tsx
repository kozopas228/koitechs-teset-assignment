import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/not-found/NotFoundPage';
import { store } from './store/store';
import HomePage from './pages/home/HomePage';
import { ErrorBoundary } from 'react-error-boundary';
import ResumePage from './pages/resume/ResumePage';

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
        errorElement: <NotFoundPage />,
    },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    </ErrorBoundary>
);
