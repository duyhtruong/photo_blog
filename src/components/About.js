import React from 'react';
import Header from './Header';
import Footer from './Footer';

class About extends React.Component{
	




	render(){
		return(
			<div>
			<Header />
				<div className='Body'>
					<div className='aboutBody'>
					<p>
					Duy Truong
					<br /> 
					25 year old living in San Jose, California
					<br />
					<br />
					Has interests in Photography, Cooking, and trying new restaurants on Yelp.
					<br />
					<br />
					Currently working in R&D in Palo Alto 
					<br />
					Aspiring Web Developer 
					</p> 
					</div>
				</div>
			<Footer />
			</div>
		);
	}
}

export default About;