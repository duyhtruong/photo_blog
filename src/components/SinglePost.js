import React from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class SinglePost extends React.Component{
	
	componentDidMount(){
		if(!this.props.allPosts[0]){
		
		this.props.getAllPosts();
		}

	}

	renderPost = (id) => {
		if(this.props.allPosts[0]){

			return (
			this.props.allPosts[0].filter(item => item['sys']['id'] == id).map(item => 
				
					<div key={item['fields']['title']}>
							<h1>
							{item['fields']['title']}
							</h1>
							<p>
							{documentToReactComponents(item['fields']['body'])}
							</p>
					</div>
				
			)

			)
		}


	}


	render(){
		return (
			
			<div> 
				<Header/>
				SinglePost
			<div className='Body'>
				{this.renderPost(this.props.match.params.id)}
			</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{

		allPosts: state.allPosts 
	}
}

export default connect(mapStateToProps, {  getAllPosts })(SinglePost);