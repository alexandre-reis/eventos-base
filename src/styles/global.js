import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		outline: 0;
	}

	body, html, input, button {
		font: 14px sans-serif;
		background: #eee;
		text-rendering: optimizeLegibility !important;
		-webkit-font-smoothing: antialiased !important;
		height: 100%;
		width: 100%;
	}

	button {
		cursor: pointer;
	}

`;
