export default (state = [], action) => {
	switch(action.type){
		case 'GET_SINGLE_POST':
			return [...state, action.payload];

		default:
			return state;
	}
};