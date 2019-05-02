import { combineReducers } from 'redux';
import singlePostReducer from './singlePostReducer';
import allPostsReducer from './allPostsReducer';

export default combineReducers({
	allPosts: allPostsReducer,
	singlePost: singlePostReducer
});

