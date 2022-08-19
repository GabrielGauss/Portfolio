import React from "react";
import CardX from "../Components/CardX";
import { Col, Row, Container } from "react-bootstrap";

const CardContainer = () => {
  return (
    <div className="cards-main">
      <h1 className="title-card"> My latests Projects</h1>
      <section className="card-container">
        <CardX />
      </section>
    </div>
  );
};

export default CardContainer;
