import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import { useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";

const q = require("../../Asset/Img/Q.png");
const u = require("../../Asset/Img/U.png");
const Branding_Q = ({
  scrollPosition,
  momHeight,
}: {
  scrollPosition: number;
  momHeight: number;
}): ReactElement => {
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (scrollPosition > 0) {
      api.start({
        opacity: 1,
        x: 0,
      });
    }

    if (scrollPosition / momHeight >= 0.25) {
      uImgapi.start({
        opacity: 1,
        scale: 1,
      });
      uapi.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [scrollPosition]);

  const imgAni = useSpring({
    to: { opacity: 1, scale: 1 },
    from: { opacity: 0, scale: 0.9 },
    config: { duration: 1500 },
  });
  const [uImgstyles, uImgapi] = useSpring(() => ({
    from: { opacity: 0, scale: 0.9 },
    config: { duration: 1500 },
  }));

  const [ustyles, uapi] = useSpring(() => ({
    from: { opacity: 0, x: 200 },
    config: config.molasses,
  }));

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, x: -200 },
    config: config.molasses,
  }));

  return (
    <BrandingContainer height={iHeight}>
      <ImgAbs
        src={q}
        height={matchesS ? iHeight * 0.6 : "auto"}
        width={matchesS ? "auto" : iWidth * 0.8}
        style={imgAni}
        alt="Quintessential"
      />
      <Text style={styles} matches={matchesS.toString()}>
        {menuItem.quintessential}
      </Text>
      <BrandingUContainer matches={matchesS.toString()}>
        <ImgAbs
          style={uImgstyles}
          src={u}
          height={matchesS ? iHeight * 0.5 : "auto"}
          width={matchesS ? "auto" : iWidth * 0.8}
          alt="Unlimited"
        />
        <Text style={ustyles} matches={matchesS.toString()}>
          {menuItem.unlimited}
        </Text>
      </BrandingUContainer>
    </BrandingContainer>
  );
};

const BrandingContainer = styled(animated.div)<{ height: number }>`
  z-index: 40;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: ${(props) => props.height * 0.4}px;
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

const BrandingUContainer = styled(animated.div)<{
  matches: string;
}>`
  z-index: 40;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  padding-left: 20%;
  padding-top: 18%;
  justify-content: ${(props) =>
    props.matches === "true" ? "flex-start" : "center"};
  align-items: center;
  flex-direction: ${(props) => (props.matches === "true" ? "row" : "column")};
  background-color: #ffffff;
`;

const Text = styled(animated.h5)<{
  matches: string;
}>`
  font-size: 34px;
  font-weight: 200;
  color: #353535;
  letter-spacing: ${(props) => (props.matches === "true" ? "20px" : "8px")};
  margin: unset;
  text-transform: uppercase;
`;

export default Branding_Q;

//margin-top: ${-iWidth / 5}px;
