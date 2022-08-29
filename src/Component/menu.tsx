import React, { ReactElement, useState } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../Enum";
import { useParallax, useWindowResize } from "../Hooks";
import useMediaQuery from "../Hooks/useDeviceInfo";
const logo = require("../Asset/Img/Qualia-Logo.png");

const Menu = (): ReactElement => {
  const itemLabels: string[] = Object.values(menuItem);
  const { para } = useParallax();
  const [items, setItems] = useState<string[]>(itemLabels);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 768px)");
  const { size } = useWindowResize();

  const [hiddenStyles, hiddenApi] = useSpring(() => ({
    from: { opacity: 0, x: -200 },
    config: config.molasses,
  }));

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

  return matches ? (
    <Container>
      <LogoImg src={logo} style={logoAni} />
      <MenuContainer>
        {entryTransitions((props, item) => (
          <ItemContainer
            style={props}
            onClick={() => {
              const index = itemLabels.indexOf(item);
              if (para) {
                para.scrollTo(index);
              }
            }}
          >
            <ItemText>{item}</ItemText>
          </ItemContainer>
        ))}
      </MenuContainer>
    </Container>
  ) : (
    <MobileMenuContainer>
      <LogoImg
        src={logo}
        style={{ ...logoAni, marginLeft: 40 }}
        width={size.width * 0.3}
      />
      <SvgContainer
        onClick={() => {
          if (menuOpen) {
            hiddenApi.start({ opacity: 0, x: -200 });
          } else {
            hiddenApi.start({ opacity: 1, x: 0 });
          }
          setMenuOpen(!menuOpen);
        }}
        style={logoAni}
      >
        <animated.svg
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: 40,
            width: 40,
            position: "relative",
            zIndex: 50,
          }}
        >
          <animated.path
            fill="#7d807e"
            stroke="#7d807e"
            d={
              menuOpen
                ? "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                : "M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
            }
          />
        </animated.svg>
      </SvgContainer>
      <HiddenMenuListContainer style={hiddenStyles}>
        {entryTransitions((props, item) => (
          <MobileItemContainer
            style={props}
            onClick={() => {
              const index = itemLabels.indexOf(item);
              if (para) {
                para.scrollTo(index);
              }
            }}
          >
            <ItemText>{item}</ItemText>
          </MobileItemContainer>
        ))}
      </HiddenMenuListContainer>
    </MobileMenuContainer>
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
const HiddenMenuListContainer = styled(animated.div)`
  width: 120px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  border-radius: 7.5px;
  padding-bottom: 15px;
  align-self: flex-start;
`;
const MobileItemContainer = styled(animated.div)`
  width: 100px;
  height: 20px;
  text-align: left;
  cursor: pointer;
`;
const SvgContainer = styled(animated.div)`
  height: 50px;
  width: 50px;
  align-self: flex-start;
  margin-top: 40px;
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
