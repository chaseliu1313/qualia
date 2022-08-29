import React, { ReactElement, useEffect, useRef, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";

import { useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";
import Branding_Q from "./branding_q";

const bg = require("../../Asset/Img/light.png");
const bgDark = require("../../Asset/Img/dark.png");
const Section1 = ({
  scrollPosition,
}: {
  scrollPosition: number;
}): ReactElement => {
  const [imgAni, Imgapi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));
  const [dkImgAni, dkImgapi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");
  const containerWidth = iWidth * 0.75;
  const imageHight = iHeight * 0.7;
  const svgHeight = matchesS ? iHeight * 1.35 : iHeight * 1.65;
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
    Imgapi.start({ opacity: 1 });
  }, []);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      if (clientHeight === 0) {
        setClientHeight(containerRef.current.clientHeight);
      }

      if (scrollPosition / containerRef.current.clientHeight <= 0.35)
        api.set({ x: scrollPosition / containerRef.current?.clientHeight });
    }

    if (scrollPosition > 0) {
      Imgapi.set({ opacity: 0 });
      dkImgapi.start({ opacity: 1 });
    }

    if (scrollPosition === 0) {
      Imgapi.start({ opacity: 1 });
      dkImgapi.set({ opacity: 0 });
    }
  }, [scrollPosition]);

  return (
    <Container ref={containerRef} height={iHeight}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: containerWidth,
        }}
      >
        <div
          style={{
            height: imageHight * 1.4,
            width: containerWidth,
            position: "relative",
          }}
        ></div>
        <div
          style={{
            height: imageHight,
            width: containerWidth,
            position: "absolute",
            top: 35,
            left: (iWidth - containerWidth) / 2,
          }}
        >
          <ImgAbs
            src={bgDark}
            height={iHeight}
            width={iWidth}
            style={dkImgAni}
          />
          <ImgAbs src={bg} height={iHeight} width={iWidth} style={imgAni} />
        </div>

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
              stroke="#adadad"
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
  padding-top: 35px;
  position: relative;
`;

const Img = styled(animated.img)<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  object-fit: cover;
  z-index: 10;
`;
const ImgAbs = styled(animated.img)<{
  height: number;
  width: number;
}>`
  height: ${(props) => props.height * 0.7}px;
  width: ${(props) => props.width * 0.75}px;
  position: absolute;
  object-fit: cover;
  z-index: 8;
  left: 0px;
  top: 0px;
`;

export default Section1;
