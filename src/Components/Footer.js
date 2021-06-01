import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
	return (
		<React.Fragment>
			<footer className="m-2 d-flex justify-content-center">
				<Link to={props.page}>
					<button className="btn btn-secondary">Back to the Home</button>
				</Link>
			</footer>
		</React.Fragment>
	);
}

export default Footer;
