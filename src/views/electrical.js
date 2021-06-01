import React from "react";
import Footer from "../Components/Footer";
import Minihead from "./Minihead";
import photo1 from "../image/elec1.jpg";
import photo2 from "../image/elec2.jpg";
import photo3 from "../image/eee.jpeg";

function Electrical() {
	return (
		<React.Fragment>
			<Minihead head={"Electrical Works"} />
			<div className="shadow-sm p-3 m-5 mb-2 fs-5 bg-light text-center">
				We Design and Install all king of Electrical Works for both Residential
				and Commercial. We also offer a Quality solution in serviceing and
				maintenance of Electrical Works.
			</div>
			<div className="d-flex justify-content-center">
				<ul
					className="list-group list-group-flush fs-5"
					style={{ width: "320px" }}
				>
					<li className="list-group-item text-center ">Inventors</li>
					<li className="list-group-item text-center">Lighting and cables</li>
				</ul>
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				<img
					src={photo1}
					className="img-thumbnail d-inline-block m-5"
					alt="Electrical"
				/>
				<img
					src={photo2}
					className="img-thumbnail d-inline-block m-5"
					alt="Electrical"
				/>
				<img
					src={photo3}
					className="img-thumbnail d-inline-block m-5"
					alt="Electrical"
				/>
			</div>
			<Footer page={"/service"} />
		</React.Fragment>
	);
}

export default Electrical;
