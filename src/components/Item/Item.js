import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'
/* import { Link } from 'react-router-dom'; */


 
function Item({id, name, image, description, price, stock}) {
    return (

            <Card className="ctn__card" key={id} style={{ width: '18rem' }}>
                <Card.Img className="ctn__card__img" src={image}/>
                <Card.Body>
                    <Card.Title className="ctn__card__title"><h2>{name}</h2></Card.Title>
                    <Card.Text className="ctn__card__dscp">
                    <p>{description}</p>
                    <p>${price}</p>
                    <ItemCount className="buttons" stock={stock}/>
                    </Card.Text>
                </Card.Body>
            </Card>
       
    )
}

export default Item;