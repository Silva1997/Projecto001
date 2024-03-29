import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from '../src/app/Routes/Rotaspaginas';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import App from './app/Paginas/login/Login'
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { ThemeProvider } from "@material-tailwind/react";

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
