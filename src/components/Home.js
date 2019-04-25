import React from 'react';
import Header from './Header';
import '../index.css';

class Home extends React.Component {
	render(){
		return(
			<div>
				<Header />
				<div className='homeBody'>
					<p>Home</p>
					<p>This is where the blog posts will show up</p>
				</div>
			</div>
			);
	}
}

export default Home;