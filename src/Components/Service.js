import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Service() {
	return (
		<React.Fragment>
			<Header head={"Service We do"} />
			<div className="d-flex justify-content-center flex-wrap">
				<div
					className="card text-center m-3 d-inline-block"
					style={{ width: "18rem" }}
				>
					<div className="card-body shadow">
						<h5 className="card-title">Solar Solutions</h5>
						<p className="card-text">
							"Solar power is the last energy resource that isn't owned yet -
							nobody taxes the sun yet."
						</p>
						<Link to="/service/solar" href="/#" className="btn btn-secondary">
							Expand
						</Link>
					</div>
				</div>
				<div
					className="card text-center m-3 d-inline-block"
					style={{ width: "18rem" }}
				>
					<div className="card-body shadow">
						<h5 className="card-title">CCTV Solutions</h5>
						<p className="card-text">
							"Nothing we do is ever going unnoticed. It's on CCTV cameras, it's
							on iphones, it's everywhere."
						</p>
						<Link to="/service/cctv" href="/#" className="btn btn-secondary">
							Expand
						</Link>
					</div>
				</div>
				<div
					className="card text-center m-3 d-inline-block"
					style={{ width: "18rem" }}
				>
					<div className="card-body shadow">
						<h5 className="card-title">Electrical Works</h5>
						<p className="card-text">
							"Electricity can transform people's lives, not just economically
							but also socially"
						</p>
						<Link
							to="/service/electrical"
							href="/#"
							className="btn btn-secondary"
						>
							Expand
						</Link>
					</div>
				</div>
				<div
					className="card text-center m-3 d-inline-block"
					style={{ width: "18rem" }}
				>
					<div className="card-body shadow">
						<h5 className="card-title">Technical Training</h5>
						<p className="card-text">
							“Tell me and I forget, teach me and I may remember, involve me and
							I learn.”
						</p>
						<Link
							to="/service/training"
							href="/#"
							className="btn btn-secondary"
						>
							Expand
						</Link>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div
					className="card m-3"
					style={{ width: "18rem", backgroundColor: "#ddd" }}
				>
					<div className="card-header text-center fw-bold">
						Why We Are Unique?
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Quick Installation</li>
						<li className="list-group-item">Flexible Hours</li>
						<li className="list-group-item">Good Quality</li>
						<li className="list-group-item">Reasonable Price</li>
					</ul>
				</div>
			</div>
			<Footer page={"/"} />
		</React.Fragment>
	);
}

export default Service;
