import React, { ReactElement } from "react";
import styled from "styled-components";
import { useCoreState } from "../Hooks";
import EntryAni from "./entryAni";
import Home from "./home";

const BodyContainer = (): ReactElement => {
  const coreState = useCoreState();

  return (
    <Container entryFinished={coreState.entryFinished}>
      {coreState.entryFinished ? <Home /> : <EntryAni />}
    </Container>
  );
};

export default BodyContainer;

const Container = styled.div<{ entryFinished: boolean }>`
  height: 100%;
  width: 100%;
  overflow: ${(props) => (props.entryFinished ? "auto" : "hidden")};
`;
