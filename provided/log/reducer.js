import {fromJS} from 'immutable';
import defaultState from './defaultState'

export default (state, action = {}) => {
  let newState = defaultState.mergeDeep(fromJS(state));

  switch (action.type) {

    case 'LOG':
    {
      newState = newState.update('log', (l)=> l.push('COUNT',newState.get('count') ) )
      break;
    }
    case 'BOOT_COMPONENT':
    {
      newState = newState.update('log', (l)=> l.push('WELCOME') )
    } 
    default:
      break;
  }

  return newState;
};
