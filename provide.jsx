import {bindActionCreators} from 'redux';
import assign from 'object-assign';

const Provide = React.createClass({
  getInitialState(){
    let actionsTobind = this.props.actions || this.actions;
    let actions = bindActionCreators( actionsTobind, this.context.store.dispatch );
    let presenter = this.props.presenter || this.presenter;
    let props = presenter( this.context.store.getState() );
    return { actions, presenter, props }
  },
  actions:{},
  presenter: function( store ){
    return store.toJS();
  },
  componentWillReceiveProps( nextProps, nextContext ){
    this.setState( function( prevState ){
      prevState.props = prevState.presenter( nextContext.store.getState() )
      return prevState
    } )
  },
  bindPresentedPropsWithChildren(){
    return React.Children.map( this.props.children, (child) => {
      let propsToMerge = assign( this.state.props, { actions: this.state.actions });
      return React.cloneElement( child, propsToMerge )
    });
  },
  render(){
    return (<div>
      {this.bindPresentedPropsWithChildren()}
    </div>)
  }
});

Provide.contextTypes = {
  store: React.PropTypes.object.isRequired
};


export default Provide
