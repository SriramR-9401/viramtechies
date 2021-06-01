import React from "react";
import Footer from "../Components/Footer";
import Minihead from "./Minihead";
import photo1 from "../image/vis1.jpeg";
import photo2 from "../image/vis2.jpeg";
import photo3 from "../image/vis3.jpeg";

function Cctv() {
	return (
		<React.Fragment>
			<Minihead head={"CCTV Solutions"} />
			<div className="shadow-sm p-3 m-5 fs-5 bg-light text-center">
				We Commission CCTV installations by bringing the latest video
				surveillance to your home and industrial property both indoor and
				outdoor
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				<img
					src={photo1}
					className="img-thumbnail d-inline-block m-5"
					alt="CCTV"
				/>
				<img
					src={photo2}
					className="img-thumbnail d-inline-block m-5"
					alt="CCTV"
				/>
				<img
					src={photo3}
					className="img-thumbnail d-inline-block m-5"
					alt="CCTV"
				/>
			</div>

			<Footer page={"/service"} />
		</React.Fragment>
	);
}

export default Cctv;
