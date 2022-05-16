import './App.css';

import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';

// Context
import { ContextProvider } from './context/ContextProvider';

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<NavbarComponent />
				<Hero />
				<LandingPage />
			</ContextProvider>
		</div>
	);
}

export default App;
