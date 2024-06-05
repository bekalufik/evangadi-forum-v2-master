import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function NotFound() {
	return (
		<Wrapper>
			<div className=" text-left">
				<h2>Sorry, the page you are looking for couldn't be found.</h2>
				<br />
				<p>
					Please go back to the <Link to={"/"}>home page</Link> and
					try again. If it still doesn't work for you, please reach
					out to our team at{" "}
					<span style={{ color: "#f6912b" }}>
						contact@ibrahimwondimu.com.
					</span>
				</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-color: #fafafa;
	padding-top: 150px;
	padding-bottom: 150px;
	div {
		margin-left: 20%;
		margin-right: 20%;
		max-width: 576px;
	}
	a {
		color: #fe8082;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
`;

export default NotFound;
