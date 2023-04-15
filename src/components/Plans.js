import React from "react";
import { Col, Row  } from "react-bootstrap";
import Cardes from "./Cardes"
import Cardess from "../data/Data.json";
import Content from "./Content"

const Plans = ({itemData})=>{
  return(

    <Row md={2} xs={1} lg={4} className="g-3">
      {Cardess.map((item) => (
        <Col key={item.id}>
          <Cardes {...item} />
        </Col>)
      )}
    </Row>
  )
}

export default Plans
