import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../../asset/images/PearlLumiLogo.png"
import "./navbar.css" 
import Sayhello from "../sayhello/Sayhello";
import { useState } from "react";

export default function Navbar(){
	const [modalSayhello ,setModalSayhello] = useState(false)
	return (

	<nav className="navbar  fixed-navbar">
	<div>
		<Link to="/" ><img src={logo} className="pearllumilogo" alt="pearllumi logo" /></Link>
	</div>

	<div>
	<ul className="navlist">
		<CustomLink to="/about-us" className="about-nav"> ABOUT US 
		</CustomLink>

		<CustomLink to="/how-we-work" className="how-we-work-nav"> HOW WE WORK 
		</CustomLink> 

		<CustomLink to="/the-team" className="the-team-nav"> THE TEAM 
		</CustomLink>

		{/* <CustomLink to="/sayhello" >  */}
					<button className="say-hello" onClick={()=>setModalSayhello(!modalSayhello)}> SAY HELLO </button>
		{/* </CustomLink> */}
	</ul>
	{modalSayhello && <Sayhello visible={modalSayhello} setModal={()=>setModalSayhello} />}
	</div>

	</nav>

	);

	function CustomLink({ to, children, ...props }) {
		const resolvedPath = useResolvedPath(to)
		const isActive = useMatch({ path: resolvedPath.pathname, end: true})

		return (
			<li className={isActive ? "active" : ""}>
				<Link to={to} {...props}> 
				{children}
				</Link>
			</li>

			)
	}
}