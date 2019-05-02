import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { Link } from 'react-router-dom';

class Archive extends React.Component{

	componentDidMount(){
		if(!this.props.allPosts){
		this.props.getAllPosts();
		}
	}
	
	renderCategories(){
		return (
			<div className='archiveCategories'>
					<div>
						<h2>Places</h2>
						{this.renderTags('places')}
					</div>
					<div>
						<h2>Things</h2>
						{this.renderTags('things')}
					</div>
					<div>
						<h2>Food</h2>
						{this.renderTags('food')}
					</div>
			</div>
		)
	}


	renderTags = (tag) => {
		if(this.props.allPosts[0]){

			return (
			this.props.allPosts[0].filter(item => item['fields']['tags'] == tag).map(item => 
				
					<div key={item['fields']['title']}>
							<li>
							<Link to={`/post/${item['sys']['id']}`}>{item['sys']['id']}</Link>
							</li>
					</div>
				
			)

			)
		}


	}


	render(){
		return(
			<div>
				<Header/>
				<div className='Body'>
					Archive
						{this.renderCategories()}
						
					
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

export default connect(mapStateToProps, { getAllPosts})(Archive);