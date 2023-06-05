import { useState, useCallback } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../asset/images/PearlLumiLogo.png';
import SayHello from '../sayhello/Sayhello';
import './navbar.css';

const CustomLink = ({ to, children }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li>
			<Link to={to} className={isActive ? 'link active' : 'link'}>
				{children}
			</Link>
		</li>
	);
};

const Navbar = () => {
	const [modalSayHello, setModalSayHello] = useState(false);
	const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

	const toggleHamburgerMenu = useCallback(() => {
		setHamburgerIsOpen(!hamburgerIsOpen);
	}, [hamburgerIsOpen]);

	return (
		<nav>
			<div className={hamburgerIsOpen ? 'navbar open' : 'navbar'}>
				<div className="logo-wrapper">
					<Link to="/">
						<img src={logo} className="logo" alt="PearlLumi logo" />
					</Link>
				</div>

				<div
					className={
						hamburgerIsOpen
							? 'hamburger-menu open'
							: 'hamburger-menu'
					}
					onClick={toggleHamburgerMenu}>
					<span />
					<span />
					<span />
				</div>

				<div
					className={
						hamburgerIsOpen ? 'list-wrapper open' : 'list-wrapper'
					}>
					<div className="nav-list">
						<CustomLink to="/about-us">ABOUT US</CustomLink>

						<CustomLink to="/how-we-work">HOW WE WORK</CustomLink>

						<CustomLink to="/the-team">THE TEAM</CustomLink>

						<button
							className="say-hello"
							onClick={() => setModalSayHello(!modalSayHello)}>
							SAY HELLO
						</button>
					</div>
				</div>
			</div>

			{modalSayHello && (
				<SayHello
					visible={modalSayHello}
					setModal={() => setModalSayHello}
				/>
			)}
		</nav>
	);
};

export default Navbar;
