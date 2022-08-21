import React, { ReactElement } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Menu from "./menu";
import Branding_Q from "./sections/branding_q";
import ParallaxContainer from "./sections/parallaxContainer";
import Section1 from "./sections/quiteessential";

const Home = (): ReactElement => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container style={props}>
      <Menu />
      <ParallaxContainer />
    </Container>
  );
};

const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default Home;
