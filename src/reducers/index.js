import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import allPostsReducer from './allPostsReducer';

export default combineReducers({
	allPosts: allPostsReducer
});

