import React from 'react';
import Card from "react-bootstrap/Card";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
})


const ProductCard = props => {
  return (
    <Card>
      <Card.Img variant="top" src={props.prod.image} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Text>
            {props.prod.name}
          </Card.Text>
          <Card.Text>
            {formatter.format(props.prod.price.value / 100)}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
