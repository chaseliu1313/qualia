import React, { ReactElement, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";

const iHeight = window.innerHeight;
const iWidth = window.innerWidth;
const q = require("../../Asset/Img/Q.png");
const u = require("../../Asset/Img/U.png");
const Branding_Q = ({
  scrollPosition,
  momHeight,
}: {
  scrollPosition: number;
  momHeight: number;
}): ReactElement => {
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
    <BrandingContainer>
      <ImgAbs
        src={q}
        height={iHeight * 0.5}
        width={iWidth * 0.4}
        style={imgAni}
      />
      <Text style={styles}>{menuItem.quintessential}</Text>
      <BrandingUContainer>
        <ImgAbs
          style={uImgstyles}
          src={u}
          height={iHeight * 0.5}
          width={iWidth * 0.4}
          alt="Unlimited"
        />
        <Text style={ustyles}>{menuItem.unlimited}</Text>
      </BrandingUContainer>
    </BrandingContainer>
  );
};

const BrandingContainer = styled(animated.div)`
  z-index: 40;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: ${iHeight * 0.4}px;
`;

const ImgAbs = styled(animated.img)`
  object-fit: cover;
  height: 60%;
  width: auto;
`;

const BrandingUContainer = styled(animated.div)`
  z-index: 40;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  padding-left: 20%;
  padding-top: 18%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
`;

const Text = styled(animated.h5)`
  font-size: 34px;
  font-weight: 200;
  color: #353535;
  letter-spacing: 20px;
  margin: unset;
  text-transform: uppercase;
`;

export default Branding_Q;

//margin-top: ${-iWidth / 5}px;
