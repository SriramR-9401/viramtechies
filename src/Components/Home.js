import React from "react";
import Header from "./Header";
import Slider from "./Slider";

function Home() {
	return (
		<React.Fragment>
			<Header head={"Home Page"} />
			<Slider />
			<br />
			<div className="shadow-sm p-3 m-5 fs-5 bg-light text-center">
				Our main motive is to provide best Quality Service to our valuable
				customers. We are technical based experts rendering genuine and reliable
				products.
			</div>
		</React.Fragment>
	);
}

export default Home;
