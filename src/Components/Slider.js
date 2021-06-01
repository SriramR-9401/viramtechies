import React from "react";
import photo1 from "../image/solar.jpg";
import photo2 from "../image/cc.jpg";
import photo3 from "../image/eee.jpeg";

function Slider() {
	return (
		<React.Fragment>
			<div className="d-flex justify-content-center">
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={photo1} className="d-block" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>Solar Solutions</h5>
								<p>
									All type of Solar solutions are available and best service
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={photo2} className="d-block" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>CCTV Solutions</h5>
								<p>
									We provide camera installation for any locations nearby
									Rajapalayam
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={photo3} className="d-block" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>Electrical Works</h5>
								<p>
									All Electrical works are handles by us with punctuality and
									quality.
								</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Slider;
