import React from "react";
import styled from "styled-components";
import loadingGif from "../assets/preloader.gif";
function Loading() {
	return (
		<Wrapper>
			<img src={loadingGif} alt="" />
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #fff;
	img {
		width: 50px;
		opacity: 0.8;
	}
`;
export default Loading;
