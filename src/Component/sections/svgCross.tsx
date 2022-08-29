import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import { useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";

const i = require("../../Asset/Img/5.png");
const brand = require("../../Asset/Img/section_5.webp");

const SvgCrossSection = ({
  currentSection,
}: {
  currentSection: number;
}): ReactElement => {
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (currentSection === 3) {
      svgApi.start({ opacity: 1 });
      api.start({ opacity: 1, y: 0 });
      brandApi.start({ opacity: 1 });
    }
  }, [currentSection]);

  const [svgStyles, svgApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const [brandStyles, brandApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, y: 200 },
    config: config.molasses,
  }));

  return (
    <Container height={iHeight}>
      <SVGContainer style={svgStyles} height={iHeight}>
        <animated.svg
          viewBox={`0 0 ${iWidth * 0.3} ${iHeight * 0.6}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: iHeight * 0.6,
            width: iWidth * 0.3,
            position: "relative",
            zIndex: 50,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animated.path
            fill="none"
            stroke="#7d807e"
            d={`
          M ${iWidth * 0.15} 0 L ${iWidth * 0.15} ${iHeight}
          M ${100} ${iHeight * 0.35} L ${iWidth * 0.3 - 100} ${iHeight * 0.35}
          `}
          />
        </animated.svg>
      </SVGContainer>
      <InContainer height={iHeight} matches={matchesS.toString()}>
        <BrandingContainer height={iHeight} matches={matchesS.toString()}>
          <LetterContainer matches={matchesS.toString()} style={brandStyles}>
            <ImgAbs
              src={i}
              height={matchesS ? "100%" : "auto"}
              width={matchesS ? "auto" : "100%"}
            />
          </LetterContainer>
          <Text matches={matchesS.toString()} style={styles}>
            {menuItem.international}
          </Text>
        </BrandingContainer>
        <ImgContainer height={iHeight} matches={matchesS.toString()}>
          <Img src={brand} height={"auto"} width={"100%"} />
        </ImgContainer>
      </InContainer>
    </Container>
  );
};
const Container = styled(animated.div)<{ height: number }>`
  height: ${(props) => props.height * 1.6}px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
`;

const SVGContainer = styled(animated.div)<{ height: number }>`
  height: ${(props) => props.height * 0.6}px;
  width: 30%;
  position: relative;
`;

const InContainer = styled(animated.div)<{ height: number; matches: string }>`
  height: ${(props) => props.height}px;
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.matches === "true" ? "flex-end" : "center"};
  align-items: center;
  flex-direction: ${(props) => (props.matches === "true" ? "row" : "column")};
  position: relative;
  background-color: #ffffff;
`;

const Img = styled(animated.img)<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  object-fit: cover;
  z-index: 10;
  position: relative;
`;

const LetterContainer = styled(animated.div)<{ matches: string }>`
  width: 70%;
  height: 90%;
  align-self: ${(props) => (props.matches === "true" ? "flex-end" : "center")};
  background-color: black;
`;

const BrandingContainer = styled(animated.div)<{
  height: number;
  matches: string;
}>`
  height: ${(props) => props.height * 0.65}px;
  width: ${(props) => (props.matches === "true" ? "50%" : "100%")};
  align-self: ${(props) => (props.matches === "true" ? "flex-end" : "center")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 80px;
`;
const ImgContainer = styled(animated.div)<{ height: number; matches: string }>`
  height: ${(props) => props.height}px;
  width: ${(props) => (props.matches === "true" ? "50%" : "100%")};
`;

const ImgAbs = styled(animated.img)<{
  height: number | string;
  width: number | string;
}>`
  object-fit: cover;
  height: ${(props) => {
    return typeof props.height === "string"
      ? props.height
      : `${props.height}px`;
  }};
  width: ${(props) => {
    return typeof props.width === "string" ? props.width : `${props.width}px`;
  }};
`;

const Text = styled(animated.h5)<{
  matches: string;
}>`
  font-size: 34px;
  font-weight: 200;
  color: black;
  letter-spacing: ${(props) => (props.matches === "true" ? "20px" : "8px")};
  margin: unset;
  align-self: ${(props) => (props.matches === "true" ? "flex-end" : "center")};
  text-transform: uppercase;
  position: relative;
`;

export default SvgCrossSection;
