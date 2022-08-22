import React, { ReactElement, useEffect } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components';
import { menuItem } from '../../Enum';
const iHeight = window.innerHeight;
const iWidth = window.innerWidth;
const a = require('../../Asset/Img/A.png');
const bg = require('../../Asset/Img/section_3.png');
const Branding_A = ({
  scrollPosition,
  currentSection,
}: {
  scrollPosition: number;
  currentSection: number;
}): ReactElement => {
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

  return (
    <Container>
      <BrandingContainer>
        <SVGContainer style={brandStyles}>
          <animated.svg
            viewBox={`0 0 ${iWidth * 0.55} ${iHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: iHeight,
              width: iWidth * 0.55,
              position: 'relative',
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
          <div style={{ height: '100%', position: 'relative' }}>
            <ImgAbs src={a} style={brandStyles} />
            <Text style={styles}>{menuItem.aesthetic}</Text>
          </div>

          <SVGContainer2 style={styles}>
            <animated.svg
              viewBox={`0 0 ${iWidth * 0.45} ${iHeight * 0.4}`}
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: iHeight * 0.4,
                width: iWidth * 0.45,
                position: 'relative',
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
          </SVGContainer2>
        </ImgContainer>
      </BrandingContainer>
      <BGContainer>
        <Img style={Imgstyles} src={bg} />
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
  position: relative;
`;
const SVGContainer2 = styled(animated.div)`
  height: 40%;
  width: 100%;
  margin-top: -2%;
  z-index: 40;
  position: relative;
`;

const ImgContainer = styled(animated.div)`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
  top: 45%;
  left: 0;
  width: 100%;
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
