import React from "react";

function Minihead(props) {
	return (
		<React.Fragment>
			<div className="d-flex justify-content-center">
				<div className=" p-3 m-1 bg-dark heading text-center fs-5 fw-bold">
					{props.head}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Minihead;
