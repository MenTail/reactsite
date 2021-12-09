import React from 'react';
import { Button, Card } from "react-bootstrap";

const CardItemComponent = (props) => {

    const addItem = () => {
        props.addItem(props.card);
    }

    const removeItem = () => {
        props.removeItem(props.card);
    }

    return (
        <div className="col-auto col-sm-9 col-md-6 col-xl-3 col-lg-4 mb-4">
            <Card><div className="col-3 d-grid position-absolute end-0 rounded m-1"> {props.totalItems.length} шт.</div>
                <Card.Img variant="top" src={props.card.imgurl} height="310px"/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>
                        <strong>{props.card.price} грн.</strong>
                    </Card.Text>

                            <div className="btn-group d-block row">
                                <Button variant="success" className="col-6" onClick={addItem}>{props.buy}</Button>
                                <Button variant="dark" className="col-6" onClick={removeItem}>Видалити</Button>
                            </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItemComponent;
