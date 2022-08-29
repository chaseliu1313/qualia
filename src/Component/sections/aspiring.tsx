import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import { useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";

const a2 = require("../../Asset/Img/A2.png");
const brand = require("../../Asset/Img/section_6.png");

const Aspiring = ({
  currentSection,
}: {
  currentSection: number;
}): ReactElement => {
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (currentSection === 4) {
      svgApi.start({ opacity: 1 });
      api.start({ opacity: 1, x: 0 });
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
    from: { opacity: 0, x: -200 },
    config: config.molasses,
  }));

  return (
    <Container height={iHeight}>
      <SVGContainer height={iHeight * 0.8} style={svgStyles}>
        <animated.svg
          viewBox={`0 0 ${iWidth * 0.4} ${iHeight * 0.8}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: iHeight * 0.8,
            width: iWidth * 0.4,
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
          M ${iWidth * 0.4} 0 L 0 ${iHeight * 0.8}
          `}
          />
        </animated.svg>
      </SVGContainer>
      <ContentContainer height={iHeight} matches={matchesS.toString()}>
        <Img
          src={brand}
          height={matchesS ? "100%" : "auto"}
          width={matchesS ? "auto" : "100%"}
          style={brandStyles}
        />
        <BrandingContainer height={iHeight} matches={matchesS.toString()}>
          <ImgAbs
            src={a2}
            height={matchesS ? "100%" : "auto"}
            width={matchesS ? "auto" : "100%"}
          />
          <Text matches={matchesS.toString()} style={styles}>
            {menuItem.aspiring}
          </Text>
        </BrandingContainer>
      </ContentContainer>
      <div
        style={{
          width: iWidth,
          height: 100,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            height: 100,
            width: "80%",
            borderTop: "1px solid #919098",
          }}
        >
          <h6
            style={{
              fontSize: 16,
              fontWeight: "lighter",
              width: "100%",
              textAlign: "left",
              color: "#919098",
              margin: 0,
            }}
          >
            © 2022 QUALIA DEVELOPMENT
          </h6>
        </div>
      </div>
    </Container>
  );
};

const Container = styled(animated.div)<{ height: number }>`
  height: ${(props) => props.height * 2}px;
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
const SVGContainer = styled(animated.div)<{ height: number }>`
  height: ${(props) => props.height}px;
  width: 40%;
  position: relative;
  align-self: center;
`;

const ContentContainer = styled(animated.div)<{
  height: number;
  matches: string;
}>`
  width: 100%;
  height: ${(props) => props.height * 0.9}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15%;
  position: relative;
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

const BrandingContainer = styled(animated.div)<{
  height: number;
  matches: string;
}>`
  height: ${(props) => props.height * 0.55}px;
  width: 60%;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.matches === "true" ? "row" : "column")};
  position: absolute;
  top: -15%;
  left: 30%;
`;
const Img = styled(animated.img)<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  object-fit: cover;
  position: relative;
`;

const Text = styled(animated.h5)<{
  matches: string;
}>`
  font-size: 34px;
  font-weight: 200;
  color: black;
  letter-spacing: ${(props) => (props.matches === "true" ? "20px" : "8px")};
  margin: unset;
  align-self: flex-end;
  text-transform: uppercase;
  position: relative;
`;
export default Aspiring;
