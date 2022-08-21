import React, { ReactElement, useState } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../Enum";
const logo = require("../Asset/Img/Qualia-Logo.png");

const Menu = (): ReactElement => {
  const itemLabels = Object.values(menuItem);

  const [items, setItems] = useState<string[]>(itemLabels);
  const logoAni = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -200 },
    config: { duration: 1500 },
  });

  const entryTransitions = useTransition(items, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100 },
    trail: 50,
    delay: 100,
    config: config.molasses,
  });

  return (
    <Container>
      <LogoImg src={logo} style={logoAni} />
      <MenuContainer>
        {entryTransitions((props, item) => (
          <ItemContainer style={props}>
            <ItemText>{item}</ItemText>
          </ItemContainer>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default Menu;

//fly in one by one
//
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

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 270px;
  width: 100%;
  padding-left: 15px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const ItemContainer = styled(animated.div)`
  width: 180px;
  height: 45px;
  text-align: left;
  cursor: pointer;
`;

const ItemText = styled.h3`
  font-size: 17px;
  font-weight: 200;
  color: #353535;
`;

const LogoImg = styled(animated.img)`
  position: absolute;
  top: 0px;
  left: -50px;
`;
