import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/landing-page/heres-how.css';

const HeresHow = () => {
	return (
		<section id="heres-how">
			<h3>
				Helping you and your company identify who you are and present
				you to the world with an intuitive digital product that drives
				<span> conversion</span>.
			</h3>

			<h2>Here's how...</h2>

			<div className="cards-container">
				<div className="card">
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fd948ba5dbcca7c8cc4798a_heads-icon.svg"
						loading="lazy"
						alt="Business Evaluatio Strategy"
					/>

					<h4>
						Business Evaluation & <br /> Strategy
					</h4>

					<p>
						Our team evaluates and assesses your business to ensure
						that it responds to a market need. We provide an outside
						lens that identifies gaps and threats, and offer
						recommendations for how to mitigate them.
					</p>
				</div>

				<div className="card">
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda1b9905da7f8065eb77d8_brand-dev-icon.svg"
						loading="lazy"
						alt=""
					/>

					<h4>
						Brand Development & <br /> Design for Humans
					</h4>

					<p>
						We develop (or re-develop) who you are and how that is
						displayed visually across all mediums. With an
						established brand identity in place, we then design
						curated and human-centered digital product(s).
					</p>
				</div>

				<div className="card">
					<img
						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda1bb0f025f70962c19f56_agile-icon.svg"
						loading="lazy"
						alt=""
					/>

					<h4>
						Agile Modifications & <br /> Community
					</h4>

					<p>
						We want to stay connected over the lifetime of your
						venture. We monitor your product making small update(s),
						to enhance user experience.
					</p>

					<Link to="/about-us" className="link">
						Read more{' '}
						<img
							src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fd233544fc93e05ba8a6696_arrow.svg"
							loading="lazy"
							alt="arrow"
							// class="image-27"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeresHow;
