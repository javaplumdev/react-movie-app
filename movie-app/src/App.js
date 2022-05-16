import './App.css';

import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

import ShowMovie from './components/ShowMovie';

// Context
import { ContextProvider } from './context/ContextProvider';

// React router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ContextProvider>
				<div className="App">
					<NavbarComponent />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Hero />
									<LandingPage />
								</>
							}
						></Route>
						<Route
							path="/:moviename/:id"
							element={
								<>
									<ShowMovie />
								</>
							}
						></Route>
					</Routes>
					<Footer />
				</div>
			</ContextProvider>
		</Router>
	);
}

export default App;
