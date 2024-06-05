import { useState, useRef } from "react";
import { useAppData } from "../App";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
function Auth() {
	const { state, dispatch } = useAppData();
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	const emailDom = useRef();
	const passDom = useRef();

	const usernameDom = useRef();
	const emailrDom = useRef();
	const passrDom = useRef();
	const fnameDom = useRef();
	const lnameDom = useRef();

	const inputAlert = dom => {
		dom.current.style.backgroundColor = "#fee6e6";
		dom.current.focus();
	};

	const login = async e => {
		e.preventDefault();
		emailDom.current.style.backgroundColor = "#fff";
		passDom.current.style.backgroundColor = "#fff";
		if (!emailDom.current.value) {
			inputAlert(emailDom);
			return;
		}
		if (!passDom.current.value) {
			inputAlert(passDom);
			return;
		}

		try {
			dispatch({ type: "CLEAR_ALERT" });
			setLoading(true);
			const { data } = await axios.post("/user/login", {
				email: emailDom.current.value,
				password: passDom.current.value,
			});

			localStorage.setItem("token", data.token);
			dispatch({ type: "SET_USER", payload: data.username });
			navigate("/home");
			setLoading(false);
		} catch ({ response }) {
			setLoading(false);
			dispatch({
				type: "ALERT",
				payload: response?.data?.error
					? "Incorrect email or password"
					: "Something went wrong try again later",
			});
			console.log(response.data);
		}
	};

	const register = async e => {
		e.preventDefault();
		usernameDom.current.style.backgroundColor = "#fff";
		fnameDom.current.style.backgroundColor = "#fff";
		lnameDom.current.style.backgroundColor = "#fff";
		emailrDom.current.style.backgroundColor = "#fff";
		passrDom.current.style.backgroundColor = "#fff";
		if (!usernameDom.current.value) {
			inputAlert(usernameDom);
			return;
		}
		if (!fnameDom.current.value) {
			inputAlert(fnameDom);
			return;
		}
		if (!lnameDom.current.value) {
			inputAlert(lnameDom);
			return;
		}
		if (!emailrDom.current.value) {
			inputAlert(emailrDom);
			return;
		}
		if (!passrDom.current.value) {
			inputAlert(passrDom);
			return;
		}
		try {
			setLoading(true);
			const { data } = await axios.post("/user/register", {
				username: usernameDom.current.value,
				firstname: fnameDom.current.value,
				lastname: lnameDom.current.value,
				email: emailrDom.current.value,
				password: passrDom.current.value,
			});

			localStorage.setItem("token", data.token);
			dispatch({ type: "SET_USER", payload: data.username });
			navigate("/home");
			setLoading(false);
		} catch ({ response }) {
			setLoading(false);
			dispatch({
				type: "ALERT",
				payload: response?.data?.error
					? response.data.error
					: "Something went wrong try again later",
			});
			console.log(response.data);
		}
	};

	return (
		<Wrapper>
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="login">
							<h5>Login to your account</h5>
							<div>
								Don’t have an account?{" "}
								<span
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="prev"
								>
									Create a new account
								</span>
							</div>
							<form onSubmit={login} className="">
								<div className="form-input">
									<input
										ref={emailDom}
										type="email"
										placeholder="Email adrress"
									/>
								</div>
								<div className="form-input password">
									<input
										ref={passDom}
										type={`${show ? "text" : "password"}`}
										placeholder="Password"
									/>
									<span
										onClick={show => {
											setShow(show => !show);
										}}
									>
										{show ? (
											<AiOutlineEye />
										) : (
											<AiOutlineEyeInvisible />
										)}
									</span>
								</div>
								<div className="forgot">
									<a href="">Forgot password?</a>
								</div>
								<div className="btn-login">
									<button
										disabled={loading}
										className={`${loading && "disabled"}`}
										type="submit"
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="carousel-item ">
						<div className="register">
							<h5>Join the network</h5>
							<div>
								Already have an account?{" "}
								<span
									type="button"
									data-bs-target="#carouselExample"
									data-bs-slide="next"
								>
									Sign in
								</span>
							</div>
							<form onSubmit={register}>
								<div className="form-input">
									<input
										ref={usernameDom}
										name="username"
										type="text"
										placeholder="Username"
									/>
								</div>

								<div className="row">
									<div className="form-input col-md-6 ">
										<input
											ref={fnameDom}
											className=""
											type="text"
											placeholder="First name"
										/>
									</div>
									<div className="form-input col-md-6">
										<input
											ref={lnameDom}
											className=""
											type="text"
											placeholder="Last name"
										/>
									</div>
								</div>
								<div className="form-input">
									<input
										ref={emailrDom}
										type="email"
										placeholder="Email adrress"
									/>
								</div>
								<div className="form-input password">
									<input
										ref={passrDom}
										type={`${show ? "text" : "password"}`}
										placeholder="Password"
									/>
									<span
										onClick={show => {
											setShow(show => !show);
										}}
									>
										{show ? (
											<AiOutlineEye />
										) : (
											<AiOutlineEyeInvisible />
										)}
									</span>
								</div>
								<div className="privacy">
									I agree to the <a href="">privacy policy</a>{" "}
									and <a href="">terms of service</a>.
								</div>
								<div className="btn-register">
									<button
										disabled={loading}
										className={`${loading && "disabled"}`}
										type="submit"
									>
										Agree and Join
									</button>
								</div>
								<div>
									<span
										type="button"
										data-bs-target="#carouselExample"
										data-bs-slide="next"
									>
										Already have an account?
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	text-align: center;
	span {
		color: #fe8402;
	}
	span:hover {
		text-decoration: underline;
	}
	form {
		margin-top: 30px;
	}
	.form-input input {
		padding: 10px 15px;
		width: 100%;
		margin-top: 15px;
		border-radius: 5px;
		border: 0.5px solid #cacaca;
	}

	.form-input input:focus {
		outline: none;
		border-bottom: 2px solid #fe8402;
	}

	.login > div,
	.register > div {
		padding: 0 10px;
		font-size: 0.9rem;
	}
	.forgot a {
		display: block;
		text-decoration: none;
		color: #fe8402;
		text-align: right;
		margin-top: 15px;
	}
	.forgot a:hover {
		text-decoration: underline;
	}

	.btn-login > button {
		font-size: 1rem;
		padding: 5px 10px;
		width: 100%;
		border-radius: 5px;
		border: none;
		margin-top: 30px;
		color: white;
		background-color: #516cf0;
	}

	.btn-login > button:hover {
		background-color: #fe8402;
	}
	.btn-register > button {
		font-size: 1rem;
		padding: 5px 10px;
		width: 100%;
		border-radius: 5px;
		border: none;
		margin-top: 20px;
		color: white;
		background-color: #516cf0;
	}

	.btn-register > button:hover {
		background-color: #fe8402;
	}
	.privacy {
		margin-top: 15px;
		font-size: 0.7rem;
		a {
			color: #fe8402;
		}
	}
	.password {
		position: relative;
	}
	.password span {
		position: absolute;
		top: 35%;
		right: 5%;
		font-size: 1.2rem;
		color: #848484;
	}
	.password span:hover {
		color: #fe8402;
	}
	.disabled {
		cursor: not-allowed;
	}
	.disabled:hover {
		background-color: #848484 !important;
	}
`;

export default Auth;
