import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Archive from './Archive';
import About from './About';


class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
	
					<Route exact path ='/' component={Home} />
					<Route exact path ='/archive' component={Archive} />
					<Route exact path ='/about' component={About} />
				</div>
			</BrowserRouter>
			);
	}
}

export default App;