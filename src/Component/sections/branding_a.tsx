import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../../Enum";
import { useParallax, useScrollStatus, useWindowResize } from "../../Hooks";
import useMediaQuery from "../../Hooks/useDeviceInfo";

const a = require("../../Asset/Img/A.png");
const bg = require("../../Asset/Img/section_3.png");

function useIsInViewport(ref: React.MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    const el = ref.current as Element;

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

const Branding_A = ({
  currentSection,
  scrollPosition,
  offset,
}: {
  currentSection: number;
  scrollPosition: number;
  offset: number;
}): ReactElement => {
  const { size } = useWindowResize();
  const iHeight = size.height;
  const iWidth = size.width;
  const matchesS = useMediaQuery("(min-width: 768px)");
  const [maskSize, setMaskSize] = useState<number>(820);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [preOffset, setPreOffset] = useState<number>(0);
  const [isEntered, setEntry] = useState<boolean>(false);

  useEffect(() => {
    if (currentSection === 1) {
      Imgapi.start({ opacity: 1, scale: 1 });
      api.start({ opacity: 1, x: 0 });
      brandApi.start({ opacity: 1 });
    }
  }, [currentSection]);

  const [Imgstyles, Imgapi] = useSpring(() => ({
    from: { opacity: 0, scale: 0.8 },
    config: { duration: 2500 },
  }));
  const [brandStyles, brandApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1500 },
  }));

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, x: 200 },
    config: config.molasses,
  }));

  useEffect(() => {
    if (offset.toFixed(2) === "0.42") {
      setEntry(true);
    }

    if (isEntered) {
      if (offset > preOffset) {
        setMaskSize((pre) => pre + offset * 100);
      } else {
        if (maskSize > 820) setMaskSize((pre) => pre + offset * -100);
      }
    }

    setPreOffset(offset);

    if (offset < 0.31) {
      setEntry(false);
      setMaskSize(820);
    }
  }, [offset]);

  return (
    <Container height={iHeight}>
      <BrandingContainer height={iHeight}>
        {matchesS && (
          <SVGContainer style={brandStyles}>
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
          M 550 0 L ${iWidth * 0.59} ${iHeight}
          `}
              />
            </animated.svg>
          </SVGContainer>
        )}
        <ImgContainer matches={matchesS.toString()}>
          <div style={{ height: "100%", position: "relative" }}>
            <ImgAbs
              src={a}
              style={brandStyles}
              height={matchesS ? "100%" : iHeight * 0.5}
              width={matchesS ? "auto" : "auto"}
            />
            <Text style={styles} matches={matchesS.toString()}>
              {menuItem.aesthetic}
            </Text>
          </div>

          <SVGContainer2 style={styles}>
            <animated.svg
              viewBox={`0 0 ${iWidth * 0.35} ${iHeight * 0.65}`}
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: iHeight * 0.65,
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
          M ${iWidth * 0.12} 0 L 0 ${iHeight * 0.65}
          `}
              />
            </animated.svg>
          </SVGContainer2>
        </ImgContainer>
      </BrandingContainer>
      <BGContainer height={iHeight} ref={containerRef}>
        <Img
          style={Imgstyles}
          src={bg}
          height={matchesS ? iHeight : iWidth}
          masksize={maskSize}
        />
      </BGContainer>
    </Container>
  );
};

const Container = styled.div<{ height: number }>`
  height: ${(props) => props.height * 1.8}px;
  width: 100%;
  background-color: #ffffff;
`;

const BrandingContainer = styled.div<{ height: number }>`
  z-index: 40;
  height: ${(props) => props.height * 0.8}px;
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
  position: relative;
`;
const SVGContainer2 = styled(animated.div)`
  height: 40%;
  width: 100%;
  margin-top: -2%;
  z-index: 40;
  position: relative;
`;

const ImgContainer = styled(animated.div)<{
  matches: string;
}>`
  height: 100%;
  width: ${(props) => (props.matches === "true" ? "567px" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Text = styled(animated.h5)<{
  matches: string;
}>`
  font-size: 34px;
  font-weight: 200;
  color: white;
  letter-spacing: ${(props) => (props.matches === "true" ? "20px" : "8px")};
  margin: unset;
  text-transform: uppercase;
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
`;

const BGContainer = styled(animated.div)<{ height: number }>`
  height: ${(props) => props.height}px;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 45;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  margin-top: -10%;
  z-index: 990;
`;

const Img = styled(animated.img)<{ height: number; masksize: number }>`
  height: ${(props) => props.height}px;
  width: 100%;
  object-fit: cover;
  z-index: 10;
  mask-image: url(https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg);
  position: relative;
  z-index: 990;
  mask-size: ${(props) => props.masksize}px;
  mask-repeat: no-repeat;
  mask-position: center;
`;

export default Branding_A;
