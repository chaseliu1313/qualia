import React, { ReactElement, useEffect, useRef, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import Branding_Q from "./branding_q";

const bg = require("../../Asset/Img/section_1.jpg");

const iHeight = window.innerHeight;
const iWidth = window.innerWidth;

const Section1 = ({
  scrollPosition,
}: {
  scrollPosition: number;
}): ReactElement => {
  const imgAni = useSpring({
    to: { opacity: 1, scale: 1 },
    from: { opacity: 0, scale: 0.9 },
    config: { duration: 1500 },
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerWidth = iWidth * 0.75;
  const imageHight = iHeight * 0.7;
  const svgHeight = iHeight * 1.35;
  const svgStopX = iWidth * 0.45;

  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 0.35 },
    config: { ...config.molasses, clamp: true },
  }));

  const aniStyles = useSpring({
    opacity: scrollPosition > 0 ? 1 : 0,
  });

  useEffect(() => {
    if (containerRef && containerRef.current) {
      if (clientHeight === 0) {
        setClientHeight(containerRef.current.clientHeight);
      }

      if (scrollPosition / containerRef.current.clientHeight <= 0.35)
        api.set({ x: scrollPosition / containerRef.current?.clientHeight });
    }
  }, [scrollPosition]);

  return (
    <Container ref={containerRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: containerWidth,
        }}
      >
        <Img
          src={bg}
          height={imageHight}
          width={containerWidth}
          style={imgAni}
        />
        <animated.div style={{ ...aniStyles, height: "100%", width: "100%" }}>
          <animated.svg
            viewBox={`0 0 ${containerWidth} ${svgHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: svgHeight,
              width: containerWidth,
              position: "relative",
              zIndex: 50,
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animated.path
              fill="none"
              stroke="#7d807e"
              d={x.to(
                [0, 0.35],
                [
                  `M ${containerWidth}, 0
      L 0, ${containerWidth} z`,

                  `M ${containerWidth}, 0
      L ${svgStopX}, ${svgHeight} z`,
                ]
              )}
            />
          </animated.svg>
        </animated.div>
      </div>
      <Branding_Q scrollPosition={scrollPosition} momHeight={clientHeight} />
    </Container>
  );
};

const Container = styled(animated.div)`
  height: ${iHeight * 2}px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: flext-start;
  align-items: center;
  flex-direction: column;
  padding-top: 35px;
  position: relative;
`;

const Img = styled(animated.img)<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  object-fit: cover;
  z-index: 10;
`;

export default Section1;
