import React, { ReactElement } from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const Menu = (): ReactElement => {
  return (
    <Container>
      <MenuItem label={"123"} />
    </Container>
  );
};

const MenuItem = ({ label }: { label: string }): ReactElement => {
  return (
    <ItemContainer>
      <ItemText>{label}</ItemText>
    </ItemContainer>
  );
};

export default Menu;

const Container = styled(animated.div)`
  height: 400px;
  width: 250px;
  position: fixed;
  background-color: #69a297;
  top: 100px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled(animated.div)`
  width: 250px;
  height: 60px;
`;

const ItemText = styled.h3`
  font-size: 24px;
  color: #353535;
`;
