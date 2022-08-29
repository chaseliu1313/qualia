import { IParallax } from '@react-spring/parallax';
import { useContext } from 'react';
import { CoreStateContext , CoreState, CoreStateActionTypes} from '../Context';
 

export const useParallax = (): {para: IParallax | null; setParallax: (para: IParallax)=> void} => {
  const { coreState, dispatchCoreState } = useContext(CoreStateContext);

  const setParallax = (para: IParallax): void =>{
    dispatchCoreState({type: CoreStateActionTypes.SET_PARALLAX, payload: {...coreState, parallax: para}})
  }

  return {para: coreState.parallax, setParallax }
   
};