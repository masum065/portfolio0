import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact/Contact';
import Home from './Components/Home/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio/Portfolio';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/portfolio'>
					<Portfolio />
				</Route>
				<Route path='/blog'>
					<Blog />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
