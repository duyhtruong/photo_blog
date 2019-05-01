import axios from 'axios';

const BASE_URL = 'https://cdn.contentful.com';
const SPACE_ID = '0pptu4cqqfwc';
const TOKEN = '27b3f174ea7cf664c2b4a3872bb829bc3413d56eaf7b45ea048eb8ac3db347d0';

export const getAllPosts = () => {
	return async (dispatch, getState) => {
	const response = await axios.get(`${BASE_URL}/spaces/${SPACE_ID}/entries?access_token=${TOKEN}&order=-sys.createdAt`);

	dispatch ({
		type: 'GET_ALL_POSTS',
		payload: response.data.items
	});
	}
}
