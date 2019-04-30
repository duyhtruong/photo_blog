import React from 'react';
import Header from './Header';

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

export default Archive;