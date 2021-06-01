import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navmenu from "./Navmenu";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	let navmenu;
	if (showMenu) {
		navmenu = (
			<Navmenu
				onClose={() => {
					setShowMenu(false);
				}}
			/>
		);
	}
	return (
		<React.Fragment>
			<div className="d-flex bd-highlight bg-dark p-2">
				<div className="me-auto p-2 bd-highlight text-white fs-4 fw-bold align-items-center">
					Viram Techies
				</div>
				<div className="p-3 bd-highlight bg-dark">
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => setShowMenu(!showMenu)}
						className="text-white fa-lg fixed"
					/>
				</div>
			</div>
			{navmenu}
		</React.Fragment>
	);
}

export default Navbar;
