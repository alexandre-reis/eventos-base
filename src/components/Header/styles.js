import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	background: orange;


	img {
		margin: 10px;
		max-width: 60px;
	}
`;

export const Home = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: opacity 0.2s;
	margin: 10px;

	&:hover {
		opacity: 0.7;
	}
`;
