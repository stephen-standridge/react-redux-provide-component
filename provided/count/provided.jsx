import Provide from '../Provide.jsx'
import presenter from './presenter'
import actions from './actions'


const Count = React.createClass({
	render(){
		return (
			<div>
				<span onClick={this.props.actions.decrement} >-</span>
				<span>{`Count: ${this.props.count}`}</span>
				<span onClick={this.props.actions.increment} >+</span>
			</div>
		)
	}
})

const ProvidedComponent = React.createClass({
  render(){
  	return (
	    <Provide actions={actions} presenter={presenter} >
	      <Count {...this.props} />
	    </Provide>  		
		)
  }
})