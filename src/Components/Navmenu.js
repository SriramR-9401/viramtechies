import React from "react";
import { Link } from "react-router-dom";

function Navmenu(props) {
	return (
		<React.Fragment>
			<ul
				className="list-group list-group-flush w-25 dropdown-menu bg-dark shadow"
				aria-labelledby="navbarDropdown"
			>
				<li className="list-group-item text-center bg-dark border-bottom">
					<Link
						to="/"
						style={{ textDecoration: "none", color: "#fff" }}
						onClick={props.onClose}
					>
						Home Page
					</Link>
				</li>
				<li className="list-group-item text-center bg-dark border-bottom">
					<Link
						to="/about"
						style={{ textDecoration: "none", color: "#fff" }}
						onClick={props.onClose}
					>
						About Us
					</Link>
				</li>
				<li className="list-group-item text-center bg-dark border-bottom">
					<Link
						to="/service"
						style={{ textDecoration: "none", color: "#fff" }}
						onClick={props.onClose}
					>
						Service We do
					</Link>
				</li>
				<li className="list-group-item text-center bg-dark">
					<Link
						to="/contact"
						style={{ textDecoration: "none", color: "#fff" }}
						onClick={props.onClose}
					>
						Contact Details
					</Link>
				</li>
			</ul>
		</React.Fragment>
	);
}

export default Navmenu;
