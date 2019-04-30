import React from 'react';
import NavBar from './NavBar';
import '../index.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(
			<div>
				<div className='headerText'>
					<Link to='/'>Header</Link>
				</div>
				<NavBar />
			</div>
		);
	}
}

export default Header;