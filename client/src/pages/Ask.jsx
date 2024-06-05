import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../App";
function Ask() {
	const navigate = useNavigate();

	const { dispatch } = useAppData();

	const token = localStorage.getItem("token");

	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState("");

	const titleDom = useRef();
	const desscriptionDom = useRef();

	const inputAlert = dom => {
		dom.current.style.backgroundColor = "#fee6e6";
		dom.current.focus();
	};

	const postQuestion = async e => {
		titleDom.current.style.backgroundColor = "#fff";
		desscriptionDom.current.style.backgroundColor = "#fff";

		e.preventDefault();
		if (!titleDom.current.value) {
			inputAlert(titleDom);
			return;
		}
		if (!desscriptionDom.current.value) {
			inputAlert(desscriptionDom);
			return;
		}
		try {
			setLoading(true);
			const { data } = await axios.post(
				"/question",
				{
					title: titleDom.current.value,
					description: desscriptionDom.current.value,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setMsg(
				"Question posted successfully. Redirecting to home page ....."
			);
			titleDom.current.value = "";
			desscriptionDom.current.value = "";

			setTimeout(() => {
				navigate("/home");
				setMsg("");
				setLoading(false);
			}, 5000);
		} catch (error) {
			setMsg("");
			setLoading(false);
			localStorage.setItem("token", "");
			dispatch({ type: "LOGOUT" });
			navigate("/");
			console.log(response.data);
		}
	};
	return (
		<Wrapper>
			<div className="container">
				<div className="steps mx-3">
					<h3>Steps to write a good Question.</h3>
					<div className="line mx-1"></div>
					<div className="mb-3">
						<span>
							<BsFillArrowRightCircleFill />
						</span>
						Summerize your problems in a one-line-title.
					</div>
					<div className="mb-3">
						<span>
							<BsFillArrowRightCircleFill />
						</span>
						Describe your problem in more detail.
					</div>
					<div className="mb-3">
						<span>
							<BsFillArrowRightCircleFill />
						</span>
						Describe what you tried and what you expected to happen.
					</div>
					<div className="mb-3">
						<span>
							<BsFillArrowRightCircleFill />
						</span>
						Review your question and post it here.
					</div>
				</div>
			</div>
			<div className="ask mt-5">
				<h3 className="text-center">Post Your Question</h3>
				<form onSubmit={postQuestion}>
					<p className="text-success text-center">{msg}</p>
					<div className="form-title w-75 w-md-50 mx-auto my-3">
						<input
							ref={titleDom}
							placeholder="Question title"
							type="text"
							className="w-100 py-2 px-3"
						/>
					</div>
					<div className="form-desc w-75 w-md-50 mx-auto">
						<textarea
							ref={desscriptionDom}
							placeholder="Question datail ..."
							rows="4"
							className="w-100 px-3 py-2"
						></textarea>
					</div>
					<div className="w-75 mx-auto mt-2">
						<button disabled={loading} className="btn btn-primary ">
							Post Question
						</button>
					</div>
				</form>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-color: #fafafa;
	padding-top: 120px;
	padding-bottom: 50px;
	.steps {
		.line {
			height: 2px;
			background-color: #fe8082;
			width: 200px;
			margin-bottom: 15px;
			transition: all 0.5s;
		}

		h3 {
			font-size: 1.5rem;
			text-transform: capitalize;
			font-family: cursive;
		}
		div {
			margin-left: 25px;
			font-family: monospace;
			span {
				color: #35355e;
				font-size: 1rem;
				margin-right: 5px;
			}
		}
	}
	.steps:hover {
		.line {
			width: 300px;
		}
	}
	.ask {
		input {
			border: 0.5px solid #35355e;
			border-radius: 5px;
			font-family: cursive;
		}
		textarea {
			border: 0.5px solid #35355e;
			border-radius: 5px;
			font-family: monospace;
		}
	}
`;
export default Ask;
