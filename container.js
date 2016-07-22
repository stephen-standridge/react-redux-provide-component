var ReactRedux = require('react-redux');
var Provider = require('react-redux').Provider;
var Redux = require('redux');

import thunk from 'redux-thunk';

module.exports = (component, logic) => {
  return {
    connectedReactElement: function(data, afterBoot, props) {
      var presenter = logic.presenter || function(state) { return state.toJS(); };
      var createStoreWithMiddleware = Redux.applyMiddleware(thunk)(Redux.createStore);
      var store = createStoreWithMiddleware(logic.reducer);
      if( logic.actionCreators ){
        var actions = Redux.bindActionCreators(logic.actionCreators, store.dispatch);
      }
      var smartComponent = ReactRedux.connect(presenter, function mapDispatchToProps(dispatch) {
        return { actions: actions };
      })(component);
      logic.onBoot && logic.onBoot(store, data, actions);
      store.subscribe(function() {
        logic.onChange && logic.onChange(store);
      });

      if(afterBoot){ afterBoot(store, actions) }

      return React.createElement(Provider, {store: store}, React.createElement(smartComponent, props));
    }
  };
};
