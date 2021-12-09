import './App.css';
import MenuComponent from "./components/menu-component/Menu-component";
import { Route, Routes } from "react-router-dom";
import ListComponent from "./pages/list-component/list-component";
import BasketComponent from "./pages/basket-component/basket-component";
import ContactComponent from "./pages/contact-component/contact-component";
import JugComponent from "./pages/Glechik-component/glechik-component";
import CupComponent from "./pages/Kruski-component/kruski-component";
import ServizComponent from "./pages/Servizi-component/servizi-component";
import RizneComponent from "./pages/Rizne-component/rizne-component";
import React, { useEffect, useState } from 'react';
import { LOCALSTORE_TOTALITEMS,itemsList} from "./models/constants";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db }  from './firebase_db';


import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "tovtarilki", "tovtarilkis");
const docSnap = getDoc(docRef);

console.log("Document data:", docSnap.path);
    


function App(props) {

    return (
        <>
            <Routes>
                <Route path="/basket" element={<BasketComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/" element={<ListComponent />} />
                <Route path="/Jugs" element={<JugComponent />} />
                <Route path="/Cups" element={<CupComponent />} />
                <Route path="/Serviz" element={<ServizComponent />} />
                <Route path="/Rizne" element={<RizneComponent />} />
            </Routes>
        </>
    );
}

export default App;
