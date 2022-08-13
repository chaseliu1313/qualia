 
import { CoreStateActionTypes } from './coreStateAction.action';
 
export interface CoreState {
 
 
  entryFinished: boolean;
 
}

export interface CoreActions {
  type: CoreStateActionTypes;
  payload: CoreState;
}