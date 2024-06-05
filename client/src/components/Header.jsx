import React from "react";
import logo from "../assets/evangadi-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppData } from "../App";

function Header() {
	const { state, dispatch } = useAppData();
	return (
		<Wrapper className="navbar navbar-expand-lg fixed-top shadow-sm">
			<div className="container px-md-4">
				<Link className="navbar-brand" to="/home">
					<img src={logo} alt="" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header">
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body links">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<Link className="nav-link " to="/home">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link">How it works</Link>
							</li>
							<li className="nav-item ">
								{!state.user ? (
									<button
										data-bs-dismiss="offcanvas"
										className="nav-link sign  "
									>
										SIGN IN
									</button>
								) : (
									<p
										className="log-out"
										onClick={() => {
											dispatch({ type: "LOGOUT" });
										}}
									>
										LOG OUT
									</p>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	z-index: 999 !important;
	width: 100%;
	height: 85px;
	background-color: white;
	.navbar-toggler {
		border: none;
	}
	img {
		width: 80%;
	}
	.sign {
		width: 200px;
		background-color: #516cf0;
		color: white;
		border-radius: 5px;
	}
	.links a:hover {
		color: #fe8402;
	}
	.sign:hover {
		background-color: #fe8402;
	}
	.log-out {
		padding-top: 5px;
		font-size: 1.2rem;
		color: #411c01;
		font-weight: bold;
		font-family: monospace;
		transition: all 0.5s;
	}
	.log-out:hover {
		cursor: pointer;
		color: #fe8402;
	}
`;

export default Header;
