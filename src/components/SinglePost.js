import React from 'react';
import Header from './Header';
import { getSinglePost } from '../actions';
import { connect } from 'react-redux';

class SinglePost extends React.Component{
	
	componentDidMount(){
		this.props.getSinglePost(this.props.match.params.id)
		console.log(this.props.match.params.id)
	}


	renderPost(){
		if(this.props.singlePost){
			return(
				<div>
					{console.log(this.props.singlePost)}
				</div>
			)
		}

	}

	render(){
		return (
			
			<div> 
				<Header/>
				SinglePost 
				{this.renderPost()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		singlePost: state.singlePostReducer
	}
}

export default connect(mapStateToProps, { getSinglePost })(SinglePost);