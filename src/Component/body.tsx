import React, { ReactElement } from "react";
import styled from "styled-components";
import { useCoreState } from "../Hooks";
import EntryAni from "./entryAni";

const BodyContainer = (): ReactElement => {
  const coreState = useCoreState();

  return (
    <Container>
      {coreState.entryFinished ? <div>123</div> : <EntryAni />}
    </Container>
  );
};

export default BodyContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-width: 1px;
  border-color: #a3c9a8;
  border-style: solid;
`;
