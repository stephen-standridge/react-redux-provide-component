var ReactRedux = require('react-redux');
var Provider = require('react-redux').Provider;
var Redux = require('redux');

import thunk from 'redux-thunk';

const Container = React.createClass({
  componentWillMount() {
    this.store = Redux.applyMiddleware(thunk)(Redux.createStore)( this.props.reducer );
    this.store.subscribe(function() {
      this.props.onChange && this.props.onChange( this.store );
    });
    this.props.onBoot && this.props.onBoot( this.store, this.props.data );        
  },
  render(){
    return(
      <Provider store={this.store}>
        {this.props.children}
      </Provider>      
    ) 
  }
})