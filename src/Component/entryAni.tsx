import React, { ReactElement, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { useCoreState, useEntryState } from "../Hooks";
const entryM = require("../Asset/Video/mobile_intro.mp4");
const entryD = require("../Asset/Video/web_intro.mp4");

const EntryAni = (): ReactElement => {
  const [play, setPlay] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const { setEntryState } = useEntryState();

  const duration = 1500;
  const detectUserAgent = (): boolean => {
    const ua = window.navigator.userAgent;
    //if mobile return true
    if (ua.includes("Windows") || ua.includes("Macintosh")) return false;
    else return true;
  };
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
        console.log("animate exist");
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
        url={detectUserAgent() ? entryM : entryD}
        muted
        playing={play}
        height={screen.height}
        width={screen.width}
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
`;

export default EntryAni;
