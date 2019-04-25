import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';


class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
	
					<Route exact path ='/' component={Home} />
					
				</div>
			</BrowserRouter>
			);
	}
}

export default App;