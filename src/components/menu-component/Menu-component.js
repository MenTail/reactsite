import React, { useEffect, useState, Component } from 'react';
import { Navbar, Nav, Container, CardImg, Button, ButtonGroup, DropdownButton, Modal, ModalTitle } from "react-bootstrap";
import '../../NavPanel.css'
import '../../App.css'

const MenuComponent = (props) => {
    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button className = "col-10 col-lg-5 col-sm-5" variant="dark" onClick={handleShow}>Категорія</Button>
            <Modal show={show} onHide={handleClose} size="sm">
              <Modal.Header>
              <Button variant="white" className="btn-close position-absolute end-0 mx-3" show={show} onClick={handleClose}></Button>
                <Modal.Title>Категорії</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <div class="btn-group-vertical col-12">
                <Button variant="btn btn-outline-dark" href="/">Тарілки</Button>
                <Button variant="btn btn-outline-dark" href="/Cups">Кружки</Button>    
                <Button variant="btn btn-outline-dark" href="/Serviz">Сервізи</Button>    
                <Button variant="btn btn-outline-dark" href="/Jugs">Глечики</Button>    
                <Button variant="btn btn-outline-dark" href="/Rizne">Різне</Button>                 
                </div>

              </Modal.Body>

            </Modal>
          </>
        );
      }
    return (
        <Navbar className="bg-dark">
            <Container>

<Navbar bg="dark" variant="dark">
            <Container>
                        <Navbar.Brand href="/">Косівські вироби</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/basket">Корзина</Nav.Link>
                    <Nav.Link href="/contact">Контакти</Nav.Link><Example />
                </Nav>
            </Container>
        </Navbar>
                <Navbar.Collapse className="justify-content-end">

                    <Navbar.Text class="text-white mx-5">
                        <Nav.Link href="/basket" className="text-white d-flex">{<CardImg src={props.imgico} class={props.cllas}></CardImg>} <div className="col-12 col-sm-12 col-md-9 col-xl-12 col-lg-11 d-flex">{props.bas} {props.basket} {props.ht} {props.pri} {props.ua}</div></Nav.Link>
                    </Navbar.Text>

                    <Navbar.Text class="text-white">
                        Контакти : +(380)986-582-516
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuComponent;