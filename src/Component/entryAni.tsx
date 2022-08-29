import React, { ReactElement, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { useCoreState, useEntryState, useWindowResize } from "../Hooks";
import useMediaQuery from "../Hooks/useDeviceInfo";
const entryM = require("../Asset/Video/mobile_intro.mp4");
const entryD = require("../Asset/Video/web_intro.mp4");

const EntryAni = (): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const { size } = useWindowResize();
  const matches = useMediaQuery("(min-width: 768px)");
  const { setEntryState } = useEntryState();

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
    if (exit) {
      setTimeout(() => {
        setEntryState(true);
      }, duration);
    }
  }, [exit]);

  return (
    <Container
      style={props}
      onClick={() => {
        setExit(true);
      }}
    >
      <ReactPlayer
        url={matches ? entryD : entryM}
        muted
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
    </Container>
  );
};

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
`;

export default EntryAni;
