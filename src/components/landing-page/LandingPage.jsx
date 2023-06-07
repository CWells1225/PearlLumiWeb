import Hero from './hero/Hero';
import './landing-page.css';

const LandingPage = () => {
	return (
		// <>

		// 	<div className="animate-section">
		// 		<div className="animate-container">
		// 			<div className="hero-animation">
		// 				<img
		// 					src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fe55bb9d7bed2a258d4ea0e_TRANSPARENT-GIF.gif"
		// 					loading="lazy"
		// 					width="1024"
		// 					alt=""
		// 					className="bouncing-ball"
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div className="section wf-section">
		// 		<div className="container">
		// 			<div className="content testy1234">
		// 				<h1 className="heading-2">
		// 					Helping you and your company identify who you are
		// 					and present you to the world with an intuitive
		// 					digital product that drives
		// 					<span className="text-span"> conversion</span>.
		// 				</h1>
		// 				<div className="title-block">Here’s how...</div>
		// 				<div className="cards">
		// 					<div className="card">
		// 						<div className="div-block-59">
		// 							<img
		// 								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fd948ba5dbcca7c8cc4798a_heads-icon.svg"
		// 								loading="lazy"
		// 								alt=""
		// 							/>
		// 						</div>
		// 						<div className="text-block">
		// 							Business Evaluation &amp; <br />
		// 							Strategy
		// 						</div>
		// 						<div className="text-block-2">
		// 							Our team evaluates and assesses your
		// 							business to ensure that it responds to a
		// 							market need. We provide an outside lens that
		// 							identifies gaps and threats, and offer
		// 							recommendations for how to mitigate them.
		// 						</div>
		// 					</div>
		// 					<div className="card">
		// 						<div className="div-block-59">
		// 							<img
		// 								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda1b9905da7f8065eb77d8_brand-dev-icon.svg"
		// 								loading="lazy"
		// 								alt=""
		// 							/>
		// 						</div>
		// 						<div className="text-block">
		// 							Brand Development &amp; <br />
		// 							Design for Humans
		// 						</div>
		// 						<div className="text-block-2">
		// 							We develop (or re-develop) who you are and
		// 							how that is displayed visually across all
		// 							mediums. With an established brand identity
		// 							in place, we then design curated and
		// 							human-centered digital product(s).
		// 						</div>
		// 					</div>
		// 					<div className="card bottom-border">
		// 						<div className="div-block-59">
		// 							<img
		// 								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda1bb0f025f70962c19f56_agile-icon.svg"
		// 								loading="lazy"
		// 								alt=""
		// 							/>
		// 						</div>
		// 						<div className="text-block">
		// 							Agile Modifications &amp;
		// 							<br />
		// 							Community
		// 						</div>
		// 						<div className="text-block-2">
		// 							We want to stay connected over the lifetime
		// 							of your venture. We monitor your product
		// 							making small update(s), to enhance user
		// 							experience.
		// 						</div>
		// 						<div className="div-block-64">
		// 							<a
		// 								href="/about-us"
		// 								className="link-block-2 read-more w-inline-block">
		// 								<div className="text-block-23">
		// 									READ MORE
		// 								</div>
		// 								<img
		// 									src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fd233544fc93e05ba8a6696_arrow.svg"
		// 									loading="lazy"
		// 									alt=""
		// 									className="image-27"
		// 								/>
		// 							</a>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div className="section clientband wf-section">
		// 		<div className="container">
		// 			<h1 className="heading-4">Teams We’ve Helped</h1>
		// 			<div className="content">
		// 				<div className="clients">
		// 					<div className="div-block">
		// 						<img
		// 							src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9a171b203665f2e5d84_Y60.svg"
		// 							loading="lazy"
		// 							alt=""
		// 						/>
		// 					</div>
		// 					<div>
		// 						<img
		// 							src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9d8795486013d6bdf98_SmartBridge%20Health.svg"
		// 							loading="lazy"
		// 							alt=""
		// 						/>
		// 					</div>
		// 					<div>
		// 						<img
		// 							src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9e99f7684df0b81d647_fyve.svg"
		// 							loading="lazy"
		// 							alt=""
		// 						/>
		// 					</div>
		// 					<div>
		// 						<img
		// 							src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbac9f479548607a16bdfb9_growsureez.svg"
		// 							loading="lazy"
		// 							alt=""
		// 						/>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div className="section hidden-meet wf-section">
		// 		<div className="container">
		// 			<div className="content collage">
		// 				<div className="circle">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbb2db1ff41ded83f8e28e8_circle.svg"
		// 						loading="lazy"
		// 						alt=""
		// 						className="image-41"
		// 					/>
		// 					<div className="text-block-3">
		// 						Meet the Women <br />
		// 						of PearlLumi
		// 					</div>
		// 					<a
		// 						href="/the-team"
		// 						className="circle-button w-button">
		// 						Get to know us
		// 					</a>
		// 				</div>
		// 				<div className="div-block-4">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/620989e011786530ac5968cd_Mykala%20Landing.png"
		// 						loading="lazy"
		// 						width="150"
		// 						alt=""
		// 					/>
		// 				</div>
		// 				<div className="div-block-11">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda6e04518d0b08ac8acf40_circle-group-min.png"
		// 						loading="lazy"
		// 						width="175"
		// 						alt=""
		// 					/>
		// 				</div>
		// 				<div className="div-block-60">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/62098941e71d0dfa6d2a251a_New%20Photo.png"
		// 						loading="lazy"
		// 						width="175"
		// 						alt=""
		// 					/>
		// 				</div>
		// 				<div className="div-block-63">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda6ddd6fdb5a5c1ec5605d_ambar-ashley-min.png"
		// 						loading="lazy"
		// 						width="150"
		// 						alt=""
		// 						className="image-46"
		// 					/>
		// 				</div>
		// 				<div className="div-block-61">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda6de4b3809c2064da2265_circle-ambar-min.png"
		// 						loading="lazy"
		// 						width="115"
		// 						alt=""
		// 					/>
		// 				</div>
		// 				<div className="div-block-62">
		// 					<img
		// 						src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fda6df0b3809c10bdda2267_circle-ashley-min.png"
		// 						loading="lazy"
		// 						width="115"
		// 						alt=""
		// 						className="image-47"
		// 					/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div className="section clientband wf-section">
		// 		<div className="container">
		// 			<div className="content">
		// 				<div className="text-block-4">CLIENT TESTIMONIALS</div>
		// 				<h1 className="heading-5">Why PearlLumi?</h1>
		// 				<div className="testmonials">
		// 					<div className="slide-1 ipad">
		// 						<div className="div-block-14"></div>
		// 						<div className="text-block-5">
		// 							The Team to Trust
		// 						</div>
		// 						<div className="text-block-6">
		// 							“I refused to launch a site that did not
		// 							authentically reflect who we are...After my
		// 							first meeting with PearlLumi, I knew they
		// 							were the team to trust.”
		// 						</div>
		// 						<div className="client-details details-hide">
		// 							<div className="text-block-7">
		// 								<span className="client-name">
		// 									Jasmine Carrasco
		// 									<br />
		// 								</span>
		// 								<span className="client-title">
		// 									CEO and Executive Director
		// 								</span>
		// 								<br />
		// 								Y.ENGAGE
		// 							</div>
		// 							<img
		// 								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbc631212647f2c68a6e025_jasmine-min.png"
		// 								loading="eager"
		// 								width="95"
		// 								alt=""
		// 								className="image-4"
		// 							/>
		// 						</div>
		// 					</div>
		// 					<div className="slide-2 slide2-ipad">
		// 						<div className="div-block-14"></div>
		// 						<div className="text-block-5">
		// 							The Greatest Value Add
		// 						</div>
		// 						<div className="text-block-6 ipad1">
		// 							“The greatest value add was the business
		// 							strategy coupled with the UX design.”
		// 						</div>
		// 						<div className="client-details adjust">
		// 							<div className="text-block-7">
		// 								<span className="client-name">
		// 									Destinee Sanders
		// 									<br />
		// 								</span>
		// 								<span className="client-title">
		// 									Founder and CEO
		// 								</span>
		// 								<br />
		// 								Growsureez PBC
		// 							</div>
		// 							<img
		// 								src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fbc66fcf897ad007c8d1788_destinee-min.png"
		// 								loading="lazy"
		// 								width="95"
		// 								alt=""
		// 								className="image-5"
		// 							/>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
		<div className='landing-page'>
			<Hero />
		</div>
	);
};

export default LandingPage;
