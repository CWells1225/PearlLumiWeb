import React from 'react';
import 'styles/components/footer.css';

const Footer = () => {
	return (
		<div id="footer">
			<div className="content">
				<div className="wrapper">
					<div className="links">
						<span>want to collaborate?</span>

						<a href="mailto:team@pearllumi.com">
							<span>TEAM@PEARLLUMI.CO</span>
						</a>
					</div>

					<div className="icons">
						<a
							href="https://www.instagram.com/pearllumi.creative/"
							target="_blank"
							rel="noreferrer">
							<img
								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbd25f4eb20a874daa80d25_instagram.svg"
								loading="lazy"
								alt="Instagram"
							/>
						</a>

						<a
							href="https://www.linkedin.com/company/pearllumi/"
							target="_blank"
							rel="noreferrer">
							<img
								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbd25f4f6893e45b40800c6_linkedin.svg"
								loading="lazy"
								alt="Linkedin"
							/>
						</a>
					</div>
				</div>

				<hr />
			</div>

			<div className="copy-write">
				<span>© 2022 PearlLumi Creative Designs.</span>
				<span>All rights reserved.</span>
			</div>
		</div>
	);
};

export default Footer;
