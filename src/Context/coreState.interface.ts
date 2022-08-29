 
import { IParallax } from '@react-spring/parallax';
import { CoreStateActionTypes } from './coreStateAction.action';
 
export interface CoreState {
 
  entryFinished: boolean;
   parallax: IParallax | null;
}

export interface CoreActions {
  type: CoreStateActionTypes;
  payload: CoreState;
}