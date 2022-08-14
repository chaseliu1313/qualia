import React, { ReactElement, useState } from "react";
import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";
import { menuItem } from "../Enum";

const Menu = (): ReactElement => {
  const itemLabels = Object.values(menuItem);

  const [items, setItems] = useState<string[]>(itemLabels);

  const entryTransitions = useTransition(items, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100 },
    trail: 50,
    delay: 100,
    config: config.molasses,
  });

  return (
    <Container>
      {entryTransitions((props, item) => (
        <ItemContainer style={props}>
          <ItemText>{item}</ItemText>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Menu;

//fly in one by one
//
const Container = styled(animated.div)`
  height: 400px;
  width: 200px;
  position: fixed;
  top: 100px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled(animated.div)`
  width: 200px;
  height: 45px;
  text-align: left;
  cursor: pointer;
`;

const ItemText = styled.h3`
  font-size: 21px;
  font-weight: 200;
  color: #353535;
`;
