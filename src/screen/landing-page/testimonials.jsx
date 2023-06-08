import React from 'react';
import 'styles/landing-page/testimonials.css';

const testimonials = () => {
	return (
		<section id="testimonials">
			<div className="container">
				<h5>Client Testimonials</h5>
				<h2>Why PearlLumi?</h2>

				<div className="testimonials-wrapper">
					<div className="cards">
						<h3>The Team to Trust</h3>
						<p>
							“I refused to launch a site that did not
							authentically reflect who we are...After my first
							meeting with PearlLumi, I knew they were the team to
							trust.”
						</p>

						<div className="client-details">
							<div className="personal-detail">
								<span>Jasmine Carrasco</span>
								<span>CEO and Executive Director</span>
								<span>Y.ENGAGE</span>
							</div>

							<img
								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbc631212647f2c68a6e025_jasmine-min.png"
								loading="eager"
								width="95"
								alt="Jasmine Carrasco"
							/>
						</div>
					</div>

					<div className="cards">
						<h3>The Greatest Value Add</h3>
						<p>
							“The greatest value add was the business strategy
							coupled with the UX design.”
						</p>

						<div className="client-details">
							<div className="personal-detail">
								<span>Destinee Sanders</span>
								<span>Founder and CEO</span>
								<span>Growsureez PBC</span>
							</div>

							<img
								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbc66fcf897ad007c8d1788_destinee-min.png"
								loading="lazy"
								width="95"
								alt="Destinee Sanders"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default testimonials;
