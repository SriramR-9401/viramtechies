import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
	return (
		<React.Fragment>
			<Header head={"Contact Details"} />
			<div className="d-flex justify-content-center">
				<div className="card sizing shadow">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31485.501315640726!2d77.55764217016518!3d9.448762959366611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6c7ecd667aec86f!2sViram%20techies!5e0!3m2!1sen!2sin!4v1621672653333!5m2!1sen!2sin"
						width="500"
						height="420"
						title="map"
						allowFullScreen=""
						className="card-img-top"
					></iframe>
					<div className="card-body">
						<div className="card-text fs-5 text-center">
							<span className="fw-bold">VIRAM TECHIES</span> <hr />
							276,Sankarankovil Road, Rajapalayam -626117, Virudhunagar
							District. <hr />
							Contact Number:8110968057/8148920181
							<hr />
							mail us@ : viramtechies@gmail.com
						</div>
					</div>
				</div>
			</div>
			<Footer page={"/"} />
		</React.Fragment>
	);
}

export default Contact;
