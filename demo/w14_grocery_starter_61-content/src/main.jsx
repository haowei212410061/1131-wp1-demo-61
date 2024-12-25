import React from 'react';
import ReactDOM from 'react-dom/client';
import App_xx from './App_xx';
import './index.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContextProvider_61 } from './pages/context_61';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider_61>
      <ToastContainer position='top-center' autoClose={2000} />
      <App_xx />
    </AppContextProvider_61>
  </React.StrictMode>
);
