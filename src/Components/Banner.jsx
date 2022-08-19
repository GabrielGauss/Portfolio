import React from "react";
import Tilt from "react-better-tilt";

import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../assets/img/gveron.svg";
import Elipse167 from "../assets/img/Ellipse 167.svg";
import Elipse168 from "../assets/img/Ellipse 168.svg";
import Elipse169 from "../assets/img/Ellipse 169.svg";
import Elipse170 from "../assets/img/Ellipse 170.svg";
import Elipse171 from "../assets/img/Ellipse 171.svg";
import Study from "../assets/img/Study.png";
import Atom from "../assets/img/Atom.png";
import Art from "../assets/img/Art.png";

const Banner = () => {
  // States
  const [LoopNum, setLoopNum] = useState(0);

  const [IsDeleting, setIsDeleting] = useState(false);

  const toRotate = ["Front-end Developer", "UI/UX Designer", "Illustrator"];

  const [Text, setText] = useState("");

  const [Delta, setDelta] = useState(300 - Math.random() * 100);
  // 300

  const period = 1000;
  // 2000

  //  Effects
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, Delta);

    return () => {
      clearInterval(ticker);
    };
  }, [Text]);

  const tick = () => {
    let i = LoopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = IsDeleting
      ? fullText.substring(0, Text.length - 1)
      : fullText.substring(0, Text.length + 1);
    setText(updatedText);

    if (IsDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!IsDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (IsDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(LoopNum + 1);
      setDelta(400);
    }
  };

  return (
    <section className="banner" id="home">
      <Col xs={12} md={6} xl={5} className="img-wrapper">
        <div class="icons-main">
          <img src={Study} alt="study" className="study" />
          <img src={Art} alt="art" className="art" />
          <img src={Atom} alt="atom" className="atom" />
        </div>
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.01}
          tiltEnable={true}
        >
          <img src={HeaderImage} alt="Header img" className="gabs" />
        </Tilt>

        <div className="bubbles">
          <img src={Elipse167} alt="Elipse167" className="Elipse167" />
          <img src={Elipse168} alt="Elipse168" className="Elipse168" />
          <img src={Elipse169} alt="Elipse169" className="Elipse169" />
          <img src={Elipse170} alt="Elipse170" className="Elipse170" />
          <img src={Elipse171} alt="Elipse171" className="Elipse171" />
        </div>
        <div class="aura"></div>
      </Col>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my portfolio</span>
            <h1>
              {`Hi I'm `}
              <span className="gabriel">Gabriel</span>
            </h1>
            <h2 className="wrap">
              <span className="span-invisble">/ </span> {Text}
            </h2>
            <p>
              I’m a self-taught frontend developer from Argentina based in Italy
              with 1+ years of experience in the software industry and 8+ in
              design and illustration
            </p>
            <button onClick={() => console.log("hola gil")}>
              Let's Connect <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
