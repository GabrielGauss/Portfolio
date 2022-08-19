import React from "react";
import Data from "../assets/Data.js";

function CardX() {
  return Data.map((item, i) => (
    <div className="box">
      <span></span>
      <span className="colors$´{}´"></span>

      <div classname="content">
        <img className="top-img" src={item.img} alt={item.id} />
        <section className="card-text">
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
        </section>
        <section className="card-btn">
          <a href={item.github}>Github</a>
          <a href={item.url}>Live preview</a>
        </section>
      </div>
    </div>
  ));
}

export default CardX;
