import React from 'react';
import { Button } from "react-bootstrap";

const SortComponent = (props) => {

    const sortingItems = (sorting) => {
        if (sorting === "ASC") {
            props.itemsList.sort((a, b) => a.price - b.price);
        } else if (sorting === "DESC") {
            props.itemsList.sort((a, b) => b.price - a.price);
        }
        props.setSortTotalItems([...props.itemsList]);
    };

    return (
        <div className="row justify-content-end mx-5">
            <div className="col-12 col-xl-4 col-lg-5 d-flex d-block col-md-7 col-sm-12 btn-group">
                    <Button className="border" variant={"dark"}onClick={e => sortingItems("clear")}>Зняти</Button>

                    <Button className="border" variant={"dark"}onClick={e => sortingItems("ASC")}>Від меншого</Button>

                    <Button className="border" variant={"dark"} onClick={e => sortingItems("DESC")}>Від більшого</Button>
            </div>
        </div>
    );
};

export default SortComponent;
