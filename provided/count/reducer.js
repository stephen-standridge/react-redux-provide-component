import {fromJS} from 'immutable';
import defaultState from './defaultState'

export default (state, action = {}) => {
  let newState = defaultState.mergeDeep(fromJS(state));

  switch (action.type) {

    case 'INCREMENT':
    {
      newState.update('count', (i)=> i++ )
      break;
    }
    case 'DECREMENT':
    {
      newState.update('count', (i)=> i-- )
      break;
    }    
      
    default:
      break;
  }

  return newState;
};
