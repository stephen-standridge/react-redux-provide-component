export default function( store ){
	return { log: store.get('log').toJS() };
}