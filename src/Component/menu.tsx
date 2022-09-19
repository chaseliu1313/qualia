import React, { ReactElement, useState, useEffect } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../Enum";
import { useEntryState, useParallax, useWindowResize } from "../Hooks";
import useMediaQuery from "../Hooks/useDeviceInfo";
const logo = require("../Asset/Img/Qualia-Logo.png");

const Menu = (): ReactElement => {
  const matches = useMediaQuery("(min-width: 768px)");
  const { size } = useWindowResize();
  const { entryState } = useEntryState();

  const [logoStyles, logoApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { ...config.molasses, duration: 500 },
  }));

  useEffect(() => {
    if (entryState) {
      logoApi.start({ opacity: 1 });
    } else {
      logoApi.start({ opacity: 0 });
    }
  }, [entryState]);

  return matches ? (
    <Container>
      <LogoImg src={logo} style={logoStyles} />
    </Container>
  ) : (
    <MobileMenuContainer>
      <LogoImg
        src={logo}
        style={{ ...logoStyles, marginLeft: 40 }}
        width={size.width * 0.3}
      />
    </MobileMenuContainer>
  );
};

export default Menu;

const Container = styled(animated.div)`
  height: 450px;
  width: 180px;
  position: fixed;
  top: 150px;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const MobileMenuContainer = styled(animated.div)`
  height: 450px;
  width: 180px;
  position: fixed;
  top: 0px;
  left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
`;

const LogoImg = styled(animated.img)`
  position: absolute;
  top: 0px;
  left: -50px;
`;
