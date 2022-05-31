import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";


const context = React.createContext();
console.log(context);
export const cxtConsumer = context.Consumer;

const animals = ['snake', 'bird', 'owl', 'ox'];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

        <BrowserRouter>
            <context.Provider value={{animals: animals}}>
                <div>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/header" element={<Header/>}/>
                        <Route path="/footer" element={<Footer/>}/>
                    </Routes>
                </div>
            </context.Provider>
        </BrowserRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
