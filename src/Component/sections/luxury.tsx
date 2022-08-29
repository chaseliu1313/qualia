import React, { ReactElement, useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import { useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";

const l = require("../../Asset/Img/4.png");
const Section_3 = ({
  currentSection,
}: {
  currentSection: number;
}): ReactElement => {
  const [flip, set] = useState<Boolean>(false);
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (currentSection === 2) {
      cubeApi.start({ opacity: 1, scale: 1 });
      brandApi.start({ opacity: 1 });
      textApi.start({ opacity: 1, x: 0 });
      svgApi.start({ opacity: 1 });
    } else {
      svgApi.update({ opacity: 0 });
    }
  }, [currentSection]);

  const [cubeStyles, cubeApi] = useSpring(() => ({
    from: { opacity: 0, scale: 2 },
    config: { duration: 2500 },
  }));

  const [brandStyles, brandApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const [svgStyles, svgApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const [textStyles, textApi] = useSpring(() => ({
    from: { opacity: 0, x: 200 },
    config: config.molasses,
  }));

  return (
    <Container height={iHeight} width={iWidth}>
      <SVGContainer style={svgStyles}>
        <animated.svg
          viewBox={`0 0 ${iWidth * 0.4} ${iHeight * 0.75}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: iHeight * 0.75,
            width: iWidth * 0.4,
            position: "relative",
            zIndex: -20,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animated.path
            fill="none"
            stroke="#7d807e"
            d={`
           M ${iWidth * 0.18} 0 L ${iWidth * 0.35} ${iHeight * 0.63} 
          `}
          />
        </animated.svg>
      </SVGContainer>
      <SubContainer matches={matchesS.toString()}>
        <CubeContainer style={cubeStyles} />
        <Text style={textStyles} matches={matchesS.toString()}>
          {menuItem.luxury}
        </Text>
        <Img
          src={l}
          style={brandStyles}
          height={matchesS ? iHeight * 0.9 : "auto"}
          width={matchesS ? 650 : iWidth * 0.8}
        />
      </SubContainer>
    </Container>
  );
};

// height: 90%;
//   width: 650px;

const SVGContainer = styled(animated.div)`
  height: 65%;
  width: 55%;
  position: absolute;
  align-self: center;
  top: -100px;
  left: 100px;
  z-index: -10;
`;

const Container = styled(animated.div)<{
  height: number | string;
  width: number | string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  backgroundcolor: "#0AD3FF";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

const SubContainer = styled(animated.div)<{
  matches: string;
}>`
  width: 50%;
  height: ${(props) => (props.matches === "true" ? "65%" : "fit-content")};
  align-self: flex-end;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const CubeContainer = styled(animated.div)`
  width: 202px;
  height: 200px;
  position: absolute;
  top: 0;
  z-index: 10;
  left: calc(50% - 148px);
  background-color: black;
`;

const Img = styled(animated.img)<{
  height: number | string;
  width: number | string;
}>`
  position: relative;
  object-fit: contain;
  height: ${(props) => {
    return typeof props.height === "string"
      ? props.height
      : `${props.height}px`;
  }};
  width: ${(props) => {
    return typeof props.width === "string" ? props.width : `${props.width}px`;
  }};
  z-index: 30;
`;
const Text = styled(animated.h5)<{
  matches: string;
}>`
  font-size: 34px;
  font-weight: 200;
  color: black;
  letter-spacing: ${(props) => (props.matches === "true" ? "15px" : "8px")};
  margin: unset;
  text-transform: uppercase;
  position: absolute;
  top: calc(100% - 350px);
  left: ${(props) => (props.matches === "true" ? "35%" : "-10px")};
  z-index: 30;
`;

export default Section_3;
