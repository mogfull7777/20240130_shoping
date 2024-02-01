import React, { useState } from "react";
import database from "../database";
import Productpage_1 from "../pages/ProductPage_1";
import Productpage_2 from "../pages/ProductPage_2";
import Productpage_3 from "../pages/ProductPage_3";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image, Container } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function ProductSec() {
  let [info] = useState(database);
  console.log("info", info);

  const navi = useNavigate();

  return (
    <div>
      <Container>
        <Row>
          {info.map((item) => (
            <Col key={item.id}>
              <Image
                src={item.image}
                fluid
                onClick={() => navi(`/product/${item.id}`)}
              />

              <p>상품명 : {item.title}</p>
              <p>가격 : {item.price}</p>
              <p>{item.description}</p>
            </Col>
          ))}
        </Row>
        <Routes>
          {info.map((item) => (
            <Route
              path={`/product/${item.id}`}
              element={<Productpage_1 />}
            ></Route>
          ))}
        </Routes>
      </Container>
    </div>
  );
}

export default ProductSec;
