import {bindActionCreators} from 'redux';
import ReactRedux from 'react-redux';
import assign from 'object-assign';

const Provide = React.createClass({
  getInitialState(){
    let actionsToBind = this.props.actions || {};
    this.actions = bindActionCreators( actionsToBind, this.context.store.dispatch );
    this.presenter = this.props.presenter || function( store ){ return store };
    return { actions, presenter, props }
  },
  componentWillReceiveProps( nextProps, nextContext ){
    this.setState( function( prevState ){
      prevState.props = prevState.presenter( nextContext.store.getState() )
      return prevState
    } )
  },
  connectChildren(){
    return React.Children.map( this.props.children, (child) => {
      return ReactRedux.connect(this.presenter, function mapDispatchToProps(dispatch) {
        return { actions: this.actions };
      })(React.cloneElement( child, this.state.props ));
    });
  },
  render(){
    return (
      <div>
        {this.connectChildren()}
      </div>
    )
  }
});

Provide.contextTypes = {
  store: React.PropTypes.object.isRequired
};


export default Provide
