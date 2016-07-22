import Provide from '../Provide.jsx'
import presenter from './presenter'
import actions from './actions'

const Log = React.createClass({
	render(){
		return (
			<div>
				{this.renderLog()}
				<span>Log Count</span>
			</div>
		)
	}
	renderLog(){
		return this.props.log.map((m)=><span>{m}</span>)
	}
})

const ProvidedComponent = React.createClass({
  render(){
  	return (
	    <Provide actions={actions} presenter={presenter} >
	      <Log {...this.props} />
	    </Provide>  		
		)
  }
})