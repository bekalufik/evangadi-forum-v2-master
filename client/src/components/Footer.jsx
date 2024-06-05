import React from "react";
import logo from "../assets/evangadi-logo-footer.png";
import styled from "styled-components";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
	return (
		<Wrapper>
			<div className="container px-sm-4">
				<div className="row">
					<div className="col-12 col-md-4 ">
						<div className="logo">
							<img src={logo} alt="" />
						</div>
						<div className="d-flex ">
							<div className="social">
								<a href="">
									<BiLogoFacebook />
								</a>
							</div>
							<div className="social">
								<a href="">
									<AiFillInstagram />
								</a>
							</div>
							<div className="social">
								<a href="">
									<AiFillYoutube />
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 footer-links">
						<h5>Useful Link</h5>
						<ul className="row">
							<li>
								<a href="">How it works</a>
							</li>
							<li>
								<a href="">Terms of Service</a>
							</li>
							<li>
								<a href="">Privacy policy</a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-4 footer-links">
						<h5>Contact Info</h5>
						<ul className="row">
							<li>Evangadi Networks</li>
							<li>support@evangadi.com</li>
							<li>+1-202-386-2702</li>
						</ul>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	padding: 60px 10px;

	background-color: #3b455a;
	.social {
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
		border: 1px solid white;
		margin: 20px 12px;
		transition: all 0.5s;
	}
	.social:hover {
		cursor: pointer;
		background-color: white;
		a {
			color: #3b455a;
		}
	}
	.social a {
		font-size: 1.8rem;
		color: white;
		margin-top: -10px;
	}
	.footer-links {
		h5 {
			color: white;
		}
		li {
			list-style: none;
			margin-left: -30px;
			color: #939a9c;
		}
		a {
			color: #939a9c;
			text-decoration: none;
			transition: all 0.5s;
		}
		a:hover {
			text-decoration: underline;
			color: white;
		}
	}
`;
export default Footer;
