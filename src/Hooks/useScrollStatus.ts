import { useContext } from 'react';
import { CoreStateContext ,  CoreStateActionTypes} from '../Context';

export const useScrollStatus = (): {scrollStatus: boolean; setScrollStatus: (isScrollEnabled: boolean)=> void} =>{
  const { coreState, dispatchCoreState } = useContext(CoreStateContext);

  const setScrollStatus = (isScrollEnabled: boolean): void =>{
    dispatchCoreState({type: CoreStateActionTypes.SET_SCROLL_STATUS, payload: {...coreState, scrollStatus: isScrollEnabled}});

  };

  return {scrollStatus: coreState.scrollStatus, setScrollStatus}

}