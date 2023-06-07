import React from 'react';
import 'styles/landing-page/partners.css';

const partners = () => {
	return (
		<section id="partners">
			<h1>Teams We've Helped</h1>

			<div className="icon-container">
				<div className="icon-inner-wrapper">
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9a171b203665f2e5d84_Y60.svg"
						loading="lazy"
						alt="Y.Engage"
					/>
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9d8795486013d6bdf98_SmartBridge%20Health.svg"
						loading="lazy"
						alt="SmartBridge Health"
					/>
				</div>

				<div className="icon-inner-wrapper">
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9e99f7684df0b81d647_fyve.svg"
						loading="lazy"
						alt="FYVE"
					/>
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9f479548607a16bdfb9_growsureez.svg"
						loading="lazy"
						alt="GrowSureez"
					/>
				</div>
			</div>
		</section>
	);
};

export default partners;
