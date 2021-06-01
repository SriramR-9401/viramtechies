import React from "react";
import Footer from "../Components/Footer";
import Minihead from "./Minihead";
import photo1 from "../image/solarcell (1).jpg";
import photo2 from "../image/solarcell (2).jpg";
import photo3 from "../image/solarcell (3).jpg";

function Solar() {
	return (
		<React.Fragment>
			<Minihead head={"Solar Solutions"} />
			<div className="shadow-sm p-3 m-5 mb-2 fs-5 bg-light text-center">
				We feel the importance of Importing the knowledge of the technical
				subject to students and here we are providing technical courses to
				students along with internships.
			</div>
			<div className="d-flex justify-content-center">
				<ul
					className="list-group list-group-flush fs-5"
					style={{ width: "320px" }}
				>
					<li className="list-group-item text-center ">Power Plants</li>
					<li className="list-group-item text-center">Water Heater</li>
					<li className="list-group-item text-center ">Street Lights</li>
					<li className="list-group-item text-center">Water Pumps</li>
				</ul>
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				<img
					src={photo1}
					className="img-thumbnail d-inline-block m-5"
					alt="solar"
				/>
				<img
					src={photo2}
					className="img-thumbnail d-inline-block m-5"
					alt="solar"
				/>
				<img
					src={photo3}
					className="img-thumbnail d-inline-block m-5"
					alt="solar"
				/>
			</div>

			<Footer page={"/service"} />
		</React.Fragment>
	);
}

export default Solar;
