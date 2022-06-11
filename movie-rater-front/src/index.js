import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from "./auth/auth";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const TokenContext = createContext(null)

function Router() {

    const [token, setToken] = useState('')
    // const TOKEN = ''


    return (

        <BrowserRouter>
            <TokenContext.Provider value={{token, setToken}}>
                <Routes>
                    <Route exact path="/" element={<Auth/>}/>
                    <Route exact path="/movies" element={<App/>}/>
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>

    )
}

export const AuthContext = React.createContext(null);

const TOKEN = '0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
