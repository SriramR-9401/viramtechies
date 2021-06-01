import React from "react";
import Footer from "../Components/Footer";
import Minihead from "./Minihead";
import photo1 from "../image/tra1.jpeg";
import photo2 from "../image/tra2.jpeg";
import photo3 from "../image/tra3.jpeg";

function Training() {
	return (
		<React.Fragment>
			<Minihead head={"Technical Training"} />
			<div className="shadow-sm p-3 m-5 fs-5 bg-light text-center">
				We feel the importance of Importing the knowledge of the technical
				subject to students and here we are providing technical courses to
				students along with internships.
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				<img
					src={photo1}
					className="img-thumbnail d-inline-block m-5"
					alt="training program"
				/>
				<img
					src={photo2}
					className="img-thumbnail d-inline-block m-5"
					alt="training program"
				/>
				<img
					src={photo3}
					className="img-thumbnail d-inline-block m-5"
					alt="training program"
				/>
			</div>
			<Footer page={"/service"} />
		</React.Fragment>
	);
}

export default Training;
