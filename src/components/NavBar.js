import React from 'react';
import '../index.css';

class NavBar extends React.Component{
	render(){
		return(
			<div>
				<div className='navBar'>
					<ul>
						<li>archive</li>
						<li>about</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;