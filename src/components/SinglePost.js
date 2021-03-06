import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';


import { compiler } from 'markdown-to-jsx';

class SinglePost extends React.Component{
	
	componentDidMount(){
		if(!this.props.allPosts[0]){
		
		this.props.getAllPosts();
		}

	}




	renderPost = (path) => {


		if(this.props.allPosts[0]){

			return (
			this.props.allPosts[0].filter(item => item['fields']['path'] === path).map(item => 
				
					<div key={item['fields']['title']}>
							<h1>
								{item['fields']['title']}
							</h1>
							<p className='postDate'>{item['fields']['date']}</p>
							<div className='innerBody'>
								{compiler(item['fields']['bodyTest']) }
							</div>
					</div>
				
			)

			)
		}


	}


	render(){
		return (
			
			<div > 
				<Header/>
				
				<div className='Body'>
					{this.renderPost(this.props.match.params.id)}
				</div>
				<Footer />
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