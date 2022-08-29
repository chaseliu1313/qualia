
import { CoreState, CoreActions } from './coreState.interface';
import { CoreStateActionTypes } from './coreStateAction.action';
export const CoreStateReducer = (
  state: CoreState,
  actions: CoreActions
): CoreState => {
  switch (actions.type) {
    case CoreStateActionTypes.SET_ENTER_FINISHED:
      return { ...state, entryFinished: actions.payload.entryFinished };
    case CoreStateActionTypes.SET_PARALLAX:
      return {...state, parallax: actions.payload.parallax}
    default:
      return state;
  }
};