export default {
	log: function(message){
		console.log(message)
		return function(dispatch){
			dispatch({
				type: 'LOG',
				message
			})
		}

	}
}

