import React, { useEffect, useState, Component } from 'react';
import { Button, Card, ButtonGroup, Dropdown, DropdownButton, Nav } from 'react-bootstrap'
import SortComponent from "../../components/sort-component/sort-component";
import CardItemComponent from "../../components/card-item-component/CardItem-component";
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";
import MenuComponent from '../../components/menu-component/Menu-component';
import Info_top from "../../components/info-top/Info_top";
import { render } from '@testing-library/react';

const RizneComponent = (props) => {

     const itemsList = [
        { id: 121, name: "#R303344", imgurl: "/imgs/tovar/rizne/01.png", price: 200 },
        { id: 122, name: "#R307427 (1x130)", imgurl: "/imgs/tovar/rizne/02.png", price: 130 },
        { id: 123, name: "#R302683", imgurl: "/imgs/tovar/rizne/03.png", price: 500 },
        { id: 124, name: "#R309262", imgurl: "/imgs/tovar/rizne/04.png", price: 150 },
        { id: 125, name: "#R301226", imgurl: "/imgs/tovar/rizne/05.png", price: 90 },
        { id: 126, name: "#R302731", imgurl: "/imgs/tovar/rizne/06.png", price: 400 },
        { id: 127, name: "#R308427 (1x70)", imgurl: "/imgs/tovar/rizne/07.png", price: 70 },
        { id: 128, name: "#R302351", imgurl: "/imgs/tovar/rizne/08.png", price: 170 },
        { id: 129, name: "#R305521", imgurl: "/imgs/tovar/rizne/09.png", price: 300 },
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
                <Info_top />

                <div className="bg-dark container-fluid text-white p-3">


                 
                 <div className="position-absolute end-0 col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                 <SortComponent itemsList={itemsList} totalItems={totalItems} setSortTotalItems={setSortTotalItems}/>
                 </div>
                 </div>
                <div className="bg-dark mt-1 pt-3 p-2 text-white"><h3>Різні вироби</h3></div>

        <section className="mt-3 container">
            <div className="row">
                {itemsToSell.map(item => {
                    return (
                        <CardItemComponent key={item.id} card={item} buy="У корзину" addItem={addItem} removeItem={removeItem}
                                           totalItems={totalItems.filter(itemFilter => itemFilter.id === item.id)} />
                    );
                })}
            </div>
        </section>
      </>
     </section>
    );
};

export default RizneComponent;
