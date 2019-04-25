import React from 'react';
import Header from './Header';
import '../index.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const contentful = require('contentful');

class Home extends React.Component {

	state = {
		all: []
	}

	componentDidMount(){
		const client = contentful.createClient({
			space: '0pptu4cqqfwc',
			accessToken: '27b3f174ea7cf664c2b4a3872bb829bc3413d56eaf7b45ea048eb8ac3db347d0'
		}) 

		client.getEntry('GxUAppsHhEjz3NrqqmNld')
			.then((entry) => {
				console.log(entry.fields)
				
				this.setState({
					all: entry.fields
				})
			})
	}

	renderPosts = () => {
		return (
			<div>
			<h1>{this.state.all.title}</h1>
			<p>{this.state.all.bodyTest}</p>
			{documentToReactComponents(this.state.all.body)}
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