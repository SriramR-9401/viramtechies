import React from "react";

function Header(props) {
	return (
		<React.Fragment>
			<header className="m-3 text-center" style={{ color: "#efefef" }}>
				<h3>{props.head}</h3>
			</header>
		</React.Fragment>
	);
}

export default Header;
