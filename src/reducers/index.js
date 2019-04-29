import { combineReducers } from 'redux';

import allPostsReducer from './allPostsReducer';

export default combineReducers({
	allPosts: allPostsReducer
});

