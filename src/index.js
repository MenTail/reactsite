import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { useEffect, useState } from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { getFirestore, collection, getDoc, getDocs, Firestore } from '@firebase/firestore';
import { initializeApp } from "firebase/app";
import { db } from "../src/firebase_db";
import 'firebase/auth';






ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

