import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {
	return (
		<React.Fragment>
			<Header head={"About Us"} />
			<div className="d-flex justify-content-center">
				<div
					className="accordion accordion-flush w-75 m-3"
					id="accordionFlushExample"
				>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingOne">
							<button
								className="accordion-button collapsed text-center"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne"
							>
								<h5>History</h5>
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingOne"
							data-bs-parent="#accordionFlushExample"
						>
							<div className="accordion-body fs-5">
								Established in the year 2019,
								<code>Viram Techies in Rajapalayam, Virudhunagar</code> is a top
								player in the category Solar Panel and CCTV surviellance Dealers
								in the Rajapalayam. This well-known establishment acts as a
								one-stop destination servicing customers both local and from
								other parts of Virudhunagar. Over the course of its journey,
								this business has established a firm foothold in it’s industry.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo"
							>
								<h5>Satisfaction</h5>
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingTwo"
							data-bs-parent="#accordionFlushExample"
						>
							<div className="accordion-body fs-5">
								The belief that customer satisfaction is as important as their
								products and services, have helped this establishment garner a
								vast base of customers, which continues to grow by the day. This
								business employs individuals that are dedicated towards their
								respective roles and put in a lot of effort to achieve the
								common vision and larger goals of the company. In the near
								future, this business aims to expand its line of products and
								services and cater to a larger client base. In Virudhunagar,
								this establishment occupies a prominent location in Rajapalayam.
								It is an effortless task in commuting to this establishment as
								there are various modes of
								<code>transport readily available</code>. It is at Sankarankovil
								Road, Near New Bus Stand, which makes it easy for first-time
								visitors in locating this establishment.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree"
							>
								<h5>Top Services</h5>
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="flush-headingThree"
							data-bs-parent="#accordionFlushExample"
						>
							<div className="accordion-body fs-5">
								It is known to provide top service in the following categories:
								CCTV Dealers, CCTV Installation Services, Solar Panel Dealers,
								CCTV Repair & Services, CCTV Installation Services-
								<code>Bosch</code>, CCTV Installation Services-
								<code>CP plus</code>, Solar Panel Installation Services, CCTV
								Installation Services-<code>Samsung</code>.
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer page={"/"} />
		</React.Fragment>
	);
}

export default About;
