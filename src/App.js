import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from 'pages/LandingPage';
import Sayhello from './components/sayhello/Sayhello';
import AboutUs from './components/aboutus/AboutUs';
import HowWeWork from './components/howwework/HowWeWork';
import TheTeam from './components/theteam/TheTeam';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<main>
			<Navbar />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					{/* <Route path="/sayhello" element= {<Sayhello />} /> */}
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/how-we-work" element={<HowWeWork />} />
					<Route path="/the-team" element={<TheTeam />} />
				</Routes>
			</div>
			{/* <Footer /> */}
		</main>
	);
};

export default App;
