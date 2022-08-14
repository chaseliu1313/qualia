import React, { ReactElement } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const bg = require("../../Asset/Img/section_1.jpg");
const logo = require("../../Asset/Img/Qualia-Logo.png");

const Section1 = (): ReactElement => {
  const iHight = window.innerHeight;
  const iWidth = window.innerWidth;

  const imgAni = useSpring({
    to: { opacity: 1, scale: 1 },
    from: { opacity: 0, scale: 0.9 },
    config: { duration: 1500 },
  });

  const logoAni = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -200 },
    config: { duration: 1500 },
  });

  return (
    <Container>
      <Img
        src={bg}
        height={iHight * 0.8}
        width={iWidth * 0.65}
        style={imgAni}
      />
      <LogoImg src={logo} style={logoAni} />
    </Container>
  );
};

const Container = styled(animated.div)`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(animated.img)<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  object-fit: cover;
`;

const LogoImg = styled(animated.img)`
  position: absolute;
  top: 100px;
  left: 0px;
`;

export default Section1;
