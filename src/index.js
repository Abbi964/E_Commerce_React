import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CartContextProvider from './store/cartContextProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartContextProvider>
        <App />
    </CartContextProvider>
);
