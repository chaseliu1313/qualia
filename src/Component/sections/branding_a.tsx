import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
const iHeight = window.innerHeight;
const iWidth = window.innerWidth;
const a = require("../../Asset/Img/A.png");
const bg = require("../../Asset/Img/section_3.png");
const Branding_A = ({
  scrollPosition,
  currentSection,
}: {
  scrollPosition: number;
  currentSection: number;
}): ReactElement => {
  return (
    <Container>
      <BrandingContainer>
        <SVGContainer>
          <animated.svg
            viewBox={`0 0 ${iWidth * 0.55} ${iHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: iHeight,
              width: iWidth * 0.55,
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
          M 200 0 L ${iWidth * 0.45} ${iHeight}
          `}
            />
          </animated.svg>
        </SVGContainer>
        <ImgContainer>
          <ImgAbs src={a} />
          <SVGContainer2>
            <SVGContainer>
              <animated.svg
                viewBox={`0 0 ${iWidth * 0.45} ${iHeight * 0.4}`}
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: iHeight * 0.4,
                  width: iWidth * 0.45,
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
          M ${iWidth * 0.3} 0 L 0 ${iHeight * 0.4}
          `}
                />
              </animated.svg>
            </SVGContainer>
          </SVGContainer2>
          <Text>{menuItem.aesthetic}</Text>
        </ImgContainer>
      </BrandingContainer>
      <BGContainer>
        <Img src={bg} />
      </BGContainer>
    </Container>
  );
};

const Container = styled.div`
  height: ${iHeight * 1.8}px;
  width: 100%;
`;

const BrandingContainer = styled(animated.div)`
  z-index: 40;
  height: ${iHeight * 0.8}px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  background-color: #ffffff;
`;
const SVGContainer = styled(animated.div)`
  height: 100%;
  width: 55%;
`;
const SVGContainer2 = styled(animated.div)`
  height: 40%;
  width: 100%;
  margin-top: -2%;
`;

const ImgContainer = styled(animated.div)`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgAbs = styled(animated.img)`
  object-fit: cover;
  height: 100%;
  width: auto;
`;

const Text = styled(animated.h5)`
  font-size: 34px;
  font-weight: 200;
  color: white;
  letter-spacing: 20px;
  margin: unset;
  text-transform: uppercase;
  position: absolute;
  top: 30%;
  left: 65%;
  align-self: center;
`;

const BGContainer = styled(animated.div)`
  height: ${iHeight * 0.9}px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 45;
  display: flex;
  justify-content: flext-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  margin-top: -10%;
  padding-left: 10%;
  background-color: #ffffff;
`;

const Img = styled(animated.img)`
  height: ${iHeight * 0.9}px;
  width: ${iHeight * 0.9}px;
  object-fit: cover;
  z-index: 10;
  border-radius: 50%;
  position: relative;
  z-index: 90;
`;

export default Branding_A;
