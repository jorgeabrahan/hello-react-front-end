import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App, Greeting } from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'greeting',
        element: <Greeting />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
