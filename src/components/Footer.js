import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
	

	renderSocials(){
		return(
			<div>
				<div className='footerIcons'>
				<SocialIcon url='http://github.com/duyhtruong' />
				</div>
				<div className='footerIcons'>
				<SocialIcon url='http://instagram.com/dhtruong' />
				</div>
				<div className='footerIcons'>
				<SocialIcon url='mailto:duytruongh@gmail.com' />
				</div>
				<div className='footerIcons'>
				<SocialIcon url='https://www.linkedin.com/in/duy-truong-3224a6119' />
				</div>
			</div>
		)
	}



	render(){
		return(
			<div> 
				<hr />
				<div className='footerBody'>
					{this.renderSocials()}
					<p>Copyright 2019 Duy Huu Truong</p>
				</div>
			</div>
		);
	}
}

export default Footer;