import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';


class Archive extends React.Component{
	
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
							{item['fields']['title']}
							</li>
					</div>
				
			)

			)
		}


	}


/*	renderFoods = () => {
		if(this.props.allPosts[0]){
			this.props.allPosts[0].filter(item => item['fields']['tags'] == 'food').map(item => {
				return (
					console.log(item['fields']['title'])
				)
			}
				)
		}
		
	}
*/



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