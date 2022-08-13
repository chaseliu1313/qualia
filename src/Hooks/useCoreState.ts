import { useContext } from 'react';
import { CoreStateContext , CoreState} from '../Context';
 

export const useCoreState = (): CoreState => {
  const { coreState, dispatchCoreState } = useContext(CoreStateContext);
  return coreState;
};