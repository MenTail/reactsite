import React, { useEffect, useState, Component } from 'react';
import { Button, Card, ButtonGroup, Dropdown, DropdownButton, Nav } from 'react-bootstrap'
import SortComponent from "../../components/sort-component/sort-component";
import CardItemComponent from "../../components/card-item-component/CardItem-component";
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";
import MenuComponent from '../../components/menu-component/Menu-component';
import Info_top from "../../components/info-top/Info_top";
import { render } from '@testing-library/react';


const ListComponent = (props) => {

     const itemsList = [
        { id: 1, name: "Іменна тарілка #T267261", imgurl: "/imgs/tovar/tarilki/01.png", price: 300 },
        { id: 2, name: "#T265262", imgurl: "/imgs/tovar/tarilki/02.png", price: 200 },
        { id: 3, name: "#T262512", imgurl: "/imgs/tovar/tarilki/03.png", price: 280 },
        { id: 4, name: "#T266321", imgurl: "/imgs/tovar/tarilki/04.png", price: 350 },
        { id: 5, name: "#T268527", imgurl: "/imgs/tovar/tarilki/05.png", price: 400 },
        { id: 6, name: "#T263783", imgurl: "/imgs/tovar/tarilki/06.png", price: 200 },
    ];

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
                <div className="bg-dark mt-1 pt-3 p-2 text-white"><h3>Тарілки</h3></div>

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

export default ListComponent;
