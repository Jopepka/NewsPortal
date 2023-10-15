import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/index';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainFeedConteiner from './components/MainFeed/MainFeedConteiner';
import Welcome from './components/Welcome/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Welcome /></App>
  },
  ...store.getState().categories.items.map((category) => {
    return ({
      path: category.toPath,
      element: <App><MainFeedConteiner category={category} /></App>
    })
  }, {})
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
