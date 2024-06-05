import React from "react";
import styled from "styled-components";
import Auth from "../components/Auth";
import { useAppData } from "../App";
import HomePage from "./HomePage";
function Dashboard() {
	const { state } = useAppData();

	const token = localStorage.getItem("token");
	if (token) {
		return (
			<>
				<HomePage />
			</>
		);
	}

	return (
		<Wrapepr>
			<div className="container px-md-5">
				<div className="row">
					<div className="col-12 col-md-5 shadow auth mx-md-4 ">
						<p className="text-danger">{state.alert}</p>
						<div className="">
							<Auth />
						</div>
					</div>
					<div className="col-12 col-md-6 explained">
						<p>About</p>
						<h1>Evangadi Networks</h1>
						<p>
							No matter what stage of life you are in, whether
							you’re just starting elementary school or being
							promoted to CEO of a Fortune 500 company, you have
							much to offer to those who are trying to follow in
							your footsteps.
						</p>
						<p>
							Wheather you are willing to share your knowledge or
							you are just looking to meet mentors of your own,
							please start by joining the network here.
						</p>
						<button>HOW IT WORKS</button>
					</div>
				</div>
			</div>
		</Wrapepr>
	);
}

const Wrapepr = styled.section`
	& {
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 140px;
		margin-bottom: 50px;
		background-image: url("./bg-svg-f.svg");
	}
	.auth {
		background-color: white;
		border-radius: 5px;
		height: auto;
		min-height: 450px;
		padding: 15px 30px 25px;
	}
	.text-danger {
		text-align: center;
		color: red;
		font-family: monospace;
	}
	.explained {
		padding-left: 25px;
		p:first-child {
			color: #fe8402;
			margin-bottom: 5px;
			font-size: 1.1rem;
		}
		h1 {
			color: #4b456f;
			font-size: 2.5rem;
			margin-bottom: 25px;
		}
		button {
			background-color: #fe8402;
			border: none;
			color: white;
			border-radius: 5px;
			padding: 5px 15px;
		}
	}
	@media (max-width: 768px) {
		.auth {
			width: 90%;
			margin: 25px auto;
		}
	}
`;
export default Dashboard;
