import React, { ReactElement } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Menu from "./menu";
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
      <Section1 />
    </Container>
  );
};

const Container = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export default Home;
