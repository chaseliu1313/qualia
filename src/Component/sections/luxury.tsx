import React, { ReactElement, useEffect } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components';
import { menuItem } from '../../Enum';

const iHeight = window.innerHeight;
const iWidth = window.innerWidth;
const l = require('../../Asset/Img/4.png');
const Section_3 = (): ReactElement => {
  return (
    <Container>
      <SubContainer>
        <Img src={l} />
      </SubContainer>
    </Container>
  );
};

const Container = styled(animated.div)`
width: ${iWidth},
height: ${iHeight},
backgroundColor: '#0AD3FF',
position: 'relative',
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

const SubContainer = styled(animated.div)`
  width: '50%';
  height: 1005;
`;

const Img = styled(animated.img)`
  object-fit: cover;
  height: 100%;
  width: auto;
`;

export default Section_3;
