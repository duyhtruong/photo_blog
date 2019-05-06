import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Archive extends React.Component{

	componentDidMount(){
		if(!this.props.allPosts[0]){
		this.props.getAllPosts();
		}
	}
	
	renderCategories(){
		return (
			<div className='archiveCategories'>
					<div className='archiveItem'>
						<h1 className='headerFont'>Places</h1>
						<div className='innerBody'>
							{this.renderTags('places')}
						</div>
					</div>
					<div className='archiveItem'>
						<h1 className='headerFont'>Things</h1>
						<div className='innerBody'>
							{this.renderTags('things')}
						</div>
					</div>
					<div className='archiveItem'>

						<h1 className='headerFont'>Food</h1>
						<div className='innerBody' >
							{this.renderTags('food')}
						</div>
					</div>
			</div>
		)
	}


	renderTags = (tag) => {
		if(this.props.allPosts[0]){

			return (
			this.props.allPosts[0].filter(item => item['fields']['tags'] === tag).map(item => 
				
					<div key={item['fields']['title']}>
							<li>
							<Link to={`/post/${item['fields']['path']}`}>{item['fields']['title']}</Link>
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
				
					<div>
						{this.renderCategories()}
					</div>
					
				</div>
				<Footer />
				
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