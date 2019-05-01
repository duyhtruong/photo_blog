import React from 'react';
import Header from './Header';
import '../index.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';


const contentful = require('contentful');

class Home extends React.Component {


	componentDidMount(){
		if(!this.props.allPosts[0]){
		this.props.getAllPosts();
		}
	}
	

	renderLatestPost = () => {
		if(!this.props.allPosts[0]){
			return (
				<div>
					{console.log('Loading')}
				</div>
				)
			}else{

			return (
				<div>
					<h1>{this.props.allPosts[0][0]['fields']['title']}</h1>
					{documentToReactComponents(this.props.allPosts[0][0]['fields']['body'])}
				</div>


			)
		}
	}	


	render(){

		return(
			<div>
				<Header />
				<div className='Body'>
					<p>Home</p>
					<p>This is where the latest blog posts will show up</p>
					{this.renderLatestPost()}
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		allPosts: state.allPosts
	}
}




export default connect(mapStateToProps, { getAllPosts })(Home);