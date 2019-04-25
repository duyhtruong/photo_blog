import React from 'react';
import NavBar from './NavBar';
import '../index.css';

class Header extends React.Component{
	render(){
		return(
			<div>
				<div className='headerText'>
					Header
				</div>
				<NavBar />
			</div>
		);
	}
}

export default Header;