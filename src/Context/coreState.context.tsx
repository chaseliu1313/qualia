import React, { useReducer, ReactElement } from "react";
import { CoreActions, CoreState } from "./coreState.interface";
import { CoreStateReducer } from "./coreState.reducer";

const initialCoreState: CoreState = {
  entryFinished: false,
  parallax: null,
};

type ContextProps = {
  coreState: CoreState;
  dispatchCoreState: React.Dispatch<CoreActions>;
};

const CoreStateContext = React.createContext<ContextProps>({} as ContextProps);

function CoreContextProvider(props: any): ReactElement {
  const [coreState, dispatch] = useReducer(CoreStateReducer, initialCoreState);

  return (
    <CoreStateContext.Provider
      value={{ coreState, dispatchCoreState: dispatch }}
    >
      {props.children}
    </CoreStateContext.Provider>
  );
}

export { CoreContextProvider, CoreStateContext };
