import React, { ReactElement } from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const bg = require("../../Asset/Img/section_1.jpg");
const logo = require("../../Asset/Img/Qualia-Logo.png");

const Section1 = (): ReactElement => {
  return (
    <Container>
      <img src={bg} style={{ height: 500, width: 500 }} />
    </Container>
  );
};

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled(animated.img)<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export default Section1;
