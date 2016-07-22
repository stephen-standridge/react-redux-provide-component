import {fromJS} from 'immutable';
import defaultState from './defaultState'
import dispatchCountActions from '../provided/count/reducer'
import dispatchLogActions from '../provided/log/reducer'

export default (state, action = {}) => {
  let newState = defaultState.mergeDeep(fromJS(state));

  switch (action.type) {

    case 'BOOT_COMPONENT':
    {
      newState = newState.set('initialized', true)
      break;
    }
      
    default:
      break;
  }
  
  newState = dispatchLogActions(newState);
  newState = dispatchCountActions(newState);

  return newState;
};
