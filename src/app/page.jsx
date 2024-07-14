// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/reset.css';
// import './styles/styles.css';
// import { Main } from './components/Main.jsx';
// import { Header } from './components/Header.jsx';

import { Header } from "../components/Header"
import { Main } from "../components/Main"





// ReactDOM.createRoot(document.getElementById('app')).render(
//     <React.StrictMode>
//         <>
//             <Header/>
//             <Main />
//         </>
//     </React.StrictMode>,
// )

import '../styles/reset.css';
import '../styles/styles.css';
const MainPage = () => {
    return (
        <>
            <Header/>
            <Main/>
        </>)

}

export default MainPage