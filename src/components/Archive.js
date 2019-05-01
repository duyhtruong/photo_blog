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
						<li>dummy1</li>
						<li>dummy2</li>
					</div>
					<div>
						<h2>Things</h2>
						<li>blah</li>
						<li>blah</li>
					</div>
					<div>
						<h2>Food</h2>
						<li>blah</li>
					</div>
			</div>
		)
	}

	

	renderFoods = () => {
		if(this.props.allPosts[0]){
			this.props.allPosts[0].filter(item => item['fields']['tags'] == 'food').map(item => {
				return (
					console.log(item['fields']['title'])
				)
			}
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
					{this.renderFoods()}
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