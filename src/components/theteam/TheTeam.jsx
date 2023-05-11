import Ashley from "../../asset/images/AshleyForAbout.png";
import Caitland from "../../asset/images/Caitland.png";
import Ambar from "../../asset/images/Ambar.png";
import Johanne from "../../asset/images/Johanne.png";
import In from "../../asset/images/In.png";
import Mykala from "../../asset/images/Mykala.png";
import TJ from "../../asset/images/TJ.png";


import "./theteam.css";


export default function TheTeam() {
	return (

	<>
				<div className="hero-team">
				<div className="container">
				<div className="content-hero-content">
				<h6 className="heading-theteam">THE TEAM</h6>
				<h1 className="heading-highlight-1">REAL PEOPLE.<br />REAL WOMEN.<br /><span className="text-span-21">ALL WOMEN OF COLOR.</span></h1>
				</div>
				</div>
				</div>

				<div className="ab-section-ashley">
				<div className="ab-container">
				<div className="ab-content-team-adjust-height">
				<div className="team-cards-team-flexbox">
				<div className="team-card">
				<div className="member">
				<div className="member-container">
				<div className="line"></div>
				<div className="member-bio w-clearfix">
				<span className="member-name-team"> Ashley Evans </span>
				<span className="member-title-team"> CEO & PRODUCT VISIONARY </span>
				<br /><br /><br />
				<span className="member-about-team">The serial entrepreneur, Ashley contributes a wealth of experience in the startup environment. Working specifically with women-led tech companies at a venture catalyst firm in DC, Ashley brings business strategy front and center to every project.</span>
				<br /><br /><br />
				<span className="obsession-list">OBSESSIONS</span>
				<br />
				<span className="obsession">+ International Travel</span>
				<br />
				<span className="obsession">+ Mariah Carey </span>
				<br />
				<span className="obsession">+ The MCU
				<br />
				</span>
				</div>
				<a href="https://www.linkedin.com/in/ashleyev/" className="bio-linkedin-team w-inline-block">
				<img src="https://uploads-ssl.webflow.com/5fb80387d0b0b18ea3a62288/5fe1fe1a5219fd6407614f82_linkedin-black.svg" loading="lazy" alt="" />
				</a>
				</div>
				<img src={Ashley} width="380px" height="530px" className="member-pic" alt="ashley" />
				</div>
				</div>
				</div>
				</div>
				</div>
				</div>

				<div className="ab-section-meet-the-team">
				<div className="team-container">
				<h6 className="heading-meet-the-team"> OUR TEAM IS GROWING </h6>
				<h1 className="heading-highlight-meetteam"> Meet Our Staff </h1>
				
				<section className="teams-block">
				<div className="grid">
					<div className="item"><img src={Caitland} alt="team member" width= "300px" height="250px" /> </div>
				    <div className="item"><img src={Ambar} alt="team member" width= "300px" height="250px" /></div>
				    <div className="item"><img src={Johanne} alt="team member" width= "300px" height="250px" /></div>
				    <div className="item"><img src={In} alt="team member" width= "300px" height="250px" /></div>
				    <div className="item"><img src={Mykala} alt="team member" width= "300px" height="250px" /></div>
				    <div className="item"><img src={TJ} alt="team member" width= "300px" height="250px" /></div>
				</div>
				</section>

				</div>
				</div>
				

				
	</>
	
	)
}