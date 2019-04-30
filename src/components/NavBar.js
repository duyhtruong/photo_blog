import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
	render(){
		return(
			<div>
				<div className='navBar'>
					<ul>
						<li>
							<Link to='/archive'>archive
							</Link>
						</li>
						<li>
							<Link to='/about'>about
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;