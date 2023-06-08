import React from 'react';
import {
	Hero,
	HeresHow,
	Partners,
	MeetTheWomen,
	Testimonials,
} from 'screen/landing-page';
import Footer from 'components/Footer';

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<HeresHow />
			<Partners />
			<MeetTheWomen />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default LandingPage;
