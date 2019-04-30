export default (state = [], action) => {
	switch(action.type){
		case 'GET_ALL_POSTS':
			return [...state, action.payload];

		default:
			return state;

	}	
};