import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";

const iHeight = window.innerHeight;
const iWidth = window.innerWidth;
const bg = require("../../Asset/Img/section_3.png");
const Section_3 = (): ReactElement => {
  return (
    <Container>
      <Img src={bg} />
    </Container>
  );
};

const Container = styled(animated.div)`
  height: ${iHeight * 0.8}px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: flext-start;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

const Img = styled(animated.img)`
  height: ${iHeight * 0.8}px;
  width: ${iHeight * 0.8}px;
  object-fit: cover;
  z-index: 10;
  border-radius: 50%;
`;

export default Section_3;
