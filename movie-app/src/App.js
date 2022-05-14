import './App.css';

import LandingPage from './components/LandingPage';

// Context
import { ContextProvider } from './context/ContextProvider';

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<LandingPage />
			</ContextProvider>
		</div>
	);
}

export default App;
