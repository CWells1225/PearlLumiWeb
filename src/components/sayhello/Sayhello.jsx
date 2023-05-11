import { useEffect } from 'react';
import './sayhello.css'
export default function Sayhello({visible, onHide}){
	useEffect(()=>{
		var modal = document.getElementById("id_modal");
		if (visible && modal) modal.style.display = "block";
    	else if (modal) modal.style.display = "none";
	},[visible])
	useEffect(() => {
		var modal = document.getElementById("id_modal");
		window.onclick = function (event) {
		  if (event.target == modal) {
			modal.style.display = "none";
			onHide(false);
		  }
		};
	  }, []);
	
	return (

	<>
		<div id="id_modal" className="modal">
			<div
				className="modal-content-view"
			>
				<div className='modal-content'>
					<div className='about-from-sec'>
						<div className='about-text'>
							<h3>TELL US ABOUT YOURSELF</h3>
						</div>
						<form className='about-form'>
							<div className='field'>
								<label htmlFor='email'>Email Address *</label>
								<input type='text' name='email'></input>
							</div>
							<div className='field'>
								<label htmlFor='email'>Full Name *</label>
								<input 
								type='text' 
								name='email'>
									
								</input>
							</div>
							<div className='about-services'>
								<p>What services are you interested in?</p>
								<div className='field'>
									<label>
										<input type="checkbox" /> <span>Web Design</span>
									</label>
								</div>
								<div className='field'>
									<label>
										<input type="checkbox" /> <span>App Design</span>
									</label>
								</div>
								<div className='field'>
									<label>
										<input type="checkbox" /> <span>Online Portal</span>
									</label>
								</div>
								<div className='field'>
									<label>
										<input type="checkbox" /> <span>Other</span>
									</label>
								</div>
							</div>
							<div className='select-sec'>
								<p>How did you hear about us?</p>
								<input type='number' placeholder='Select one...'></input>
							</div>
							<div className='submit-sec'>
								<button type='submit' className='submit-btn'>SUBMIT</button>
								<a className='cancel' href='/'>CANCEL</a>
							</div>
						</form>
					</div>
					
				</div>
			</div>
			</div>
	</>
	);
}