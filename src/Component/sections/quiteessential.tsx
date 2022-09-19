import React, { ReactElement, useEffect, useRef, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";

import { useEntryState, useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";
import Branding_Q from "./branding_q";

const bg = require("../../Asset/Img/section_1.jpg");

const Section1 = ({
  scrollPosition,
  offset,
}: {
  scrollPosition: number;
  offset: number;
}): ReactElement => {
  const [imgAni, Imgapi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1000 },
  }));

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const { size } = useWindowResize();
  const { entryState } = useEntryState();
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
    opacity: offset.toPrecision(2) >= "0.074" ? 1 : 0,
  });

  useEffect(() => {
    if (entryState) {
      Imgapi.start({ opacity: 1 });
    } else {
      Imgapi.start({ opacity: 0 });
    }
  }, [entryState]);

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
    <Container ref={containerRef} height={iHeight} style={imgAni}>
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
            height: iHeight,
            width: containerWidth,
            position: "relative",
          }}
        />
        <div
          style={{
            height: imageHight,
            width: containerWidth,
            position: "absolute",
            top: 35,
            left: (iWidth - containerWidth) / 2,
          }}
        >
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
              d={`M ${containerWidth}, 0
      L ${svgStopX}, ${svgHeight} z`}
            />
          </animated.svg>
        </animated.div>
      </div>
      <Branding_Q
        scrollPosition={scrollPosition}
        momHeight={clientHeight}
        offset={offset}
      />
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

  background-color: #ffffff;
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
