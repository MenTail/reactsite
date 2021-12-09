import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';


const Info_top = () => {
    return (
        <>
            <div className="posia"> <h1 className="text-center">Косівські вироби</h1> <h1 className="mx-5 mt-5">Вироби на замовлення, іменні, роботи від майстра. <br/> Традиційний народний гуцульський промисел, один з видів кераміки. Гончарні вироби: різноманітний посуд, сувеніри, декоративні плитки.</h1> </div>
            <CardImg src="/imgs/Top_img/Top3.jpg" className="imgx" height="500px" ></CardImg>
        </> );   

};

export default Info_top;