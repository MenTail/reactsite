import React, { useState } from 'react';
import { Button, Card, ButtonGroup, Dropdown, DropdownButton, Nav, Modal, CloseButton,Image } from 'react-bootstrap'
import { LOCALSTORE_TOTALITEMS,itemsList } from "../../models/constants";
import CardItemComponent from "../../components/card-item-component/CardItem-component";
import MenuComponent from '../../components/menu-component/Menu-component';
import '../../App.css';

const BasketComponent = () => {

    const [itemsToSell, setItemsToSell] = useState(itemsList);
    const [totalItems, setTotalItems] = useState(JSON.parse(window.localStorage.getItem(LOCALSTORE_TOTALITEMS)));

    var i = [0];

    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : "Немає вибраних товарів";
        return (cardsLocal);
    };

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

    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleCloses = () => setShow(false);
        const handleShow = () => setShow(true);

        if (!totalItems.length) return <p className="text-white display-6">Товару не вибрано</p>;
      
        return (
          <>
            <Button  className = "btn btn-outline-light col-10 col-lg-3 col-sm-4" variant="dark" onClick={handleShow}>Оформити замовлення</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
              <Button variant="white" className="btn-close position-absolute end-0 mx-3" show={show} onClick={handleClose}></Button>
                <Modal.Title>Оформлення товару</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className="d-flex xy-5 align-items-center mt-3">Спосіб оплати : "При полученні товару"</div>
                <div className="d-flex xy-5 align-items-center mt-3">Спосіб доставики : "Нова пошта" - від 45 грн.</div>
                <div className="d-flex xy-5 align-items-center mt-3">Місто, село </div> 
                <input className="mx-3" type="text" class="form-control" placeholder="Населений пункт"></input>
                <div className="d-flex xy-5 align-items-center mt-3">Відділ пошти</div>
                <input className="mx-3" type="text" class="form-control" placeholder="Номер"></input>
                <div className="d-flex xy-5 align-items-center mt-3">Ім'я, прізвище, по батькові </div>
                <input className="mx-3" type="text" class="form-control" placeholder="П.І.Б"></input>
                <div className="d-flex xy-5 align-items-center mt-3">Номер телефону </div>
                <input className="mx-3" type="text" class="form-control" placeholder="+(380) ..."></input>
                <div className="d-flex xy-5 align-items-center mt-3">Email </div>
                <input className="mx-3" type="text" class="form-control" placeholder="Електронна пошта"></input>
                <div for="message-text" class="col-form-label">Коментар : </div>
            <textarea class="form-control" id="message-text" placeholder="Уточнення до замовлення"></textarea>


              </Modal.Body><div className="mx-5 my-2"><h4>Сума : {totalItems.reduce((accumulator, item)=>{return accumulator += item.price;}, 0 )} {"грн"} <br/> Кількість товару : {totalItems.length} шт. </h4> </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрити
                </Button>
                <Button variant="success" onClick={handleCloses}>
                  Підтвердити замовлення
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      


    return (

      <section className="app">        
      <header className="app-header">
      </header>
      <>
      <MenuComponent imgico={"/imgs/tovar/buy.png"} cllas="buy mx-2" bas="Корзина :" basket={totalItems.length} ht="шт. |" pri={totalItems.reduce((accumulator, item)=>{return accumulator += item.price;}, 0 )} ua={"грн"} />
        <div className="container-fluid text-center">
            <div className="row">
            
                <div className="mt-5"></div>
                {Array.isArray(getLocalStore()) && getLocalStore().map((item) => {
                    if (i.indexOf(item.id) <= -1) {
                        i.push(item.id);
                        return (
                            <CardItemComponent key={item.index} card={item} buy="Добавити" addItem={addItem} removeItem={removeItem}
                                totalItems={getLocalStore().filter(itemFilter => itemFilter.id === item.id)} />
                        );
                    }
                })}            
                
                <div className="bg-dark p-3 mt-5 text-center container-fluid m-0">
                <Example/>
                </div>

            </div>

        </div>
        </>
        </section>
    );
};

export default BasketComponent;
