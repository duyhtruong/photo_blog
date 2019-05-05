import React from 'react';
import Header from './Header';
import '../index.css';

import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { compiler } from 'markdown-to-jsx';



class Home extends React.Component {


	componentDidMount(){
		if(!this.props.allPosts[0]){
		this.props.getAllPosts();
		}
	}
	

	renderLatestPost = () => {
		if(!this.props.allPosts[0]){
			return (
				null
				)
			}else{

			return (
				<div>
					<h1>{this.props.allPosts[0][0]['fields']['title']}</h1>
							<div className='innerBody'>
							{compiler(this.props.allPosts[0][0]['fields']['bodyTest'])}
							</div>

				</div>


			)
		}
	}	


	render(){

		return(
			<div>
				<Header />
				<div className='Body'>

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