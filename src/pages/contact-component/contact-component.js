import React, { useEffect, useState, Component } from 'react';
import { Button, Card, ButtonGroup, Dropdown, DropdownButton, Nav } from 'react-bootstrap'
import SortComponent from "../../components/sort-component/sort-component";
import CardItemComponent from "../../components/card-item-component/CardItem-component";
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";
import MenuComponent from '../../components/menu-component/Menu-component';
import Info_top from "../../components/info-top/Info_top";
import { render } from '@testing-library/react';
import "../../App.css";

const ContactComponent = (props) => {

    const itemsList = [
        { id: 1, name: "ТОВАРИ32", imgurl: "/imgs/Tovar/01.jpg", price: 1300 },
        { id: 2, name: "Тарілка2222", imgurl: "/imgs/Tovar/02.png", price: 12350 },
        { id: 3, name: "Тарілка", imgurl: "/imgs/Tovar/01.jpg", price: 300 },
        { id: 4, name: "Тарілка", imgurl: "/imgs/Tovar/02.png", price: 300 },
        { id: 5, name: "Тарілка", imgurl: "/imgs/Tovar/01.jpg", price: 1300 },
        { id: 6, name: "Тарілка", imgurl: "/imgs/Tovar/02.png", price: 300 },
        { id: 7, name: "Тарілка", imgurl: "/imgs/Tovar/01.jpg", price: 300 },
        { id: 8, name: "Тарілка", imgurl: "/imgs/Tovar/02.png", price: 2300 },
    ];

    const [itemsToSell, setItemsToSell] = useState(itemsList);
    const [totalItems, setTotalItems] = useState([]);

    const getLocalStore = () => {
        if (totalItems && totalItems.length > 0) {
            return;
        }
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            setTotalItems([...cardsLocal]);
        }
    };

    useEffect(() => {
        getLocalStore();
    });

    const addItem = (cardItem) => {
        setTotalItems([...totalItems, cardItem]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
    };

    const removeItem = (cardItem) => {
        let foundItemIndex;
        totalItems.forEach((item, index) => {
            if (item.id === cardItem.id) {
                foundItemIndex = index;
            }
        });
        totalItems.splice(foundItemIndex, 1);
        setTotalItems([...totalItems]);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
    };

    const setSortTotalItems = (cards) => {
        setItemsToSell(cards);
    }


    return (

        <section className="app">
            <header className="app-header">
            </header>
            <>
            <MenuComponent imgico={"/imgs/tovar/buy.png"} cllas="buy mx-2" bas="Корзина :" basket={totalItems.length} ht="шт. |" pri={totalItems.reduce((accumulator, item)=>{return accumulator += item.price;}, 0 )} ua={"грн"} />

            <div className=""><h2 className="pt-3">Контактні дані</h2>
            <div className="h3 align-items-start">
                <Card.Body>
                    <div className="d-block " >Мене звуть : Андрій Джаман Ігорович</div>
                    <div className="d-block mt-3" >Номер телефону : +(380)986-623-234</div>
                    <div className="d-block mt-3" >Електронна пошта : andriy.dzaman@gmail.com</div>
                </Card.Body>

                </div>
            </div>

        </>
        </section>
    );
};

export default ContactComponent;
