import { useContext } from 'react';
import { CoreStateContext , CoreState, CoreStateActionTypes} from '../Context';
 

export const useEntryState = (): {entryState: boolean; setEntryState: (state: boolean)=> void} => {
  const { coreState, dispatchCoreState } = useContext(CoreStateContext);

  const setEntryState = (state: boolean): void =>{
    dispatchCoreState({type: CoreStateActionTypes.SET_ENTER_FINISHED, payload: {entryFinished: state}})
  }

  return {entryState: coreState.entryFinished, setEntryState}
   
};