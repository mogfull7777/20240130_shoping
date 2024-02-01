import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import database from "../database.js";
import ProductSec from "./ProductSec.js";

function Main() {
  let [info] = useState(database);
  console.log("info", info);

  const navi = useNavigate();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src="img/banner_img_1.png" alt="product_1" fluid />
          </Col>
        </Row>
        <ProductSec />
      </Container>
    </div>
  );
}

export default Main;
