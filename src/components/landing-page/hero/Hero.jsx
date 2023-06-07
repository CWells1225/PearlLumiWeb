import React from 'react';
// import './hero.css';

const Hero = () => {
	return (
		<section id="hero">
			<h1>
				An agency of strategists, designers, creators,
				<br /> and developers that champion <br />
				<span> women</span> and
				<span> minority-led </span>
				companies.
			</h1>

			<div className="hero-animation">
				<img
					src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fe55bb9d7bed2a258d4ea0e_TRANSPARENT-GIF.gif"
					loading="lazy"
					width="1024"
					alt=""
					className="bouncing-ball"
				/>
			</div>
		</section>
	);
};

export default Hero;
