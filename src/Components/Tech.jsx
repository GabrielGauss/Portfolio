import React from "react";
import { useState, useRef } from "react";
import Technologies from "../assets/Technologies.json";
import Logos from "../assets/logos";
import Tilt from "react-tilt";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function Tech() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return Logos.map((techno, i) => (
    <Tilt
      className="Tilt"
      options={{
        max: 35,
        scale: 1,
        glare: true,
        maxGlare: 0.5,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
      style={{
        height: 150,
        width: 150,
      }}
    >
      <div className="Tilt-inner">
        <div
          className="img-box"
          ref={target.current}
          onMouseOver={() => setShow(!show)}
        >
          <img src={techno.img} alt={techno.titulo} className="thumb" />
          <h3 className="tech-title">{techno.titulo}</h3>
        </div>
      </div>

      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {techno.titulo}
          </Tooltip>
        )}
      </Overlay>
    </Tilt>
  ));
}

export default Tech;
