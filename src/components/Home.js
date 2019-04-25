import React from 'react';
import Header from './Header';
import '../index.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const contentful = require('contentful');

class Home extends React.Component {

	state = {
		allPosts: []
	}

	componentDidMount(){
		const client = contentful.createClient({
			space: '0pptu4cqqfwc',
			accessToken: '27b3f174ea7cf664c2b4a3872bb829bc3413d56eaf7b45ea048eb8ac3db347d0'
		}) 

		client.getEntries({
			order: 'sys.createdAt'
		})
			.then((response) => {
				this.setState({
					allPosts: response.items
				})
			})
	}

	renderPosts = () => {
		return (
			<div>
			{
				this.state.allPosts.map((item)=>
					<div key={item.fields.title}>
					<h1>{item.fields.title}</h1>
					{documentToReactComponents(item.fields.body)}
					<p>Tags: {item.fields.tags}</p>
					</div>

				)
			}
			</div>
		)
	}	

	render(){

		return(
			<div>
				<Header />
				<div className='homeBody'>
					<p>Home</p>
					<p>This is where the blog posts will show up</p>
					{this.renderPosts()}
				</div>
			</div>
			);
	}
}

export default Home;