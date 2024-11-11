// erd-frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const requiredEnv = ['PORT', 'MONGO_URI', 'CORS_ORIGIN', 'JWT_SECRET', 'WORKLOAD_IDENTITY_PROVIDER'];

requiredEnv.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
