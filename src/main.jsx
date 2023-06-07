import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './routes/App';
import Greeting from './routes/Greeting';
import './index.css';

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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
