import React,{ useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData";
import "./style.css"
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/action'

const Cards = () => {
  const [data, setdata] = useState(CardsData);
  const dispatch = useDispatch();
  const send = (e) =>{
      console.log(e);
      dispatch(ADD(e))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
            data.map((element, id) => {
          return (
            
            <div className="col-md-4" key={element.id}>
              <Card style={{ width: "22rem",border:"none"}} >
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : Rs {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary"
                  onClick={()=>send(element)} className='col-lg-12'>Add to Cart</Button>
                  </div>
                  
                </Card.Body>
              </Card>
              {/* className="mx-9 mt-4 card_style" */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
