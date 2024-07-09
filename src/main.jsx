import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/styles.css';
import { Main } from './components/Main.jsx';
import { Header } from './components/Header.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <>
            <Header/>
            <Header/>
            <Main />
        </>
    </React.StrictMode>,
)