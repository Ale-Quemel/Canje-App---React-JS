import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'


 
function Item({id, name, image, description, price, stock}) {
    return (
        <div className="ctn__cards__mayor">
            <Card className="ctn__card" key={id} style={{ width: '18rem' }}>
                <Card.Img className="ctn__card__img" src={image}/>
                <Card.Body>
                    <Card.Title className="ctn__card__title">{name}</Card.Title>
                    <Card.Text className="ctn__card__dscp">
                    {description}
                    <p>${price}</p>
                    <ItemCount className="buttons" stock={stock}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;