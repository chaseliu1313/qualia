import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";

const iHeight = window.innerHeight;
const iWidth = window.innerWidth;

const Section_2 = ({ asset }: { asset: string }): ReactElement => {
  return (
    <Container>
      <Img src={asset} />
    </Container>
  );
};

export default Section_2;

const Container = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Text = styled(animated.h5)`
  font-size: 34px;
  font-weight: 200;
  color: #353535;
  letter-spacing: 20px;
  margin: unset;
  text-transform: uppercase;
`;

const Img = styled(animated.img)`
  height: ${iHeight * 0.7}px;
  width: ${iWidth}px;
  object-fit: cover;
  z-index: 10;
`;
