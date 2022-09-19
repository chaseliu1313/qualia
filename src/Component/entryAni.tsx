import React, { ReactElement, useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import {
  useCoreState,
  useEntryState,
  useParallax,
  useWindowResize,
} from "../Hooks";
import useMediaQuery from "../Hooks/useDeviceInfo";
const fg = require("../Asset/Video/logo.mov");
const bg = require("../Asset/Video/background.mp4");

const EntryAni = ({
  scrollPosition,
}: {
  scrollPosition: number;
}): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const { size } = useWindowResize();
  const matches = useMediaQuery("(min-width: 768px)");
  const { entryState, setEntryState } = useEntryState();
  const { para } = useParallax();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const duration = 1500;

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration },
    reverse: exit,
    onRest: () => {
      setPlay(true);
    },
  });

  useEffect(() => {
    if (scrollPosition > 60 && entryState === false) {
      setExit(true);
      setEntryState(true);
      para?.scrollTo(0.5);
    }
    if (scrollPosition <= 60 && entryState) {
      setExit(false);
      setEntryState(false);
      para?.scrollTo(0);
    }
  }, [scrollPosition]);

  return (
    <Container style={props} ref={containerRef}>
      <ReactPlayer
        url={bg}
        muted
        id="videoPlayer"
        loop
        playing={play}
        height={matches ? size.height : undefined}
        width={matches ? size.width : undefined}
        style={
          matches
            ? {}
            : {
                position: "absolute",
                top: 0,
                left: -100,
                minHeight: size.height,
                minWidth: size.width,
                alignSelf: "center",
                paddingRight: "30%",
              }
        }
        onEnded={() => {
          setExit(true);
        }}
      />
      <SubContainer style={props}>
        <ReactPlayer
          url={fg}
          muted
          id="videoPlayer"
          loop
          playing={play}
          height={200}
          width={size.width}
          style={{
            minHeight: 200,
            minWidth: size.width,
          }}
          onEnded={() => {
            setExit(true);
          }}
        />
      </SubContainer>
    </Container>
  );
};

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  cursor: context-menu;
  display: flex;
`;

const SubContainer = styled(animated.div)`
  height: 50;
  width: 100vw;

  position: absolute;
  top: 200px;
  left: 0;
`;

export default EntryAni;
