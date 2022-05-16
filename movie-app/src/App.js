import './App.css';

import NavbarComponent from './components/NavbarComponent';
import LandingPage from './components/LandingPage';

// Context
import { ContextProvider } from './context/ContextProvider';

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<NavbarComponent />
				<LandingPage />
			</ContextProvider>
		</div>
	);
}

export default App;
