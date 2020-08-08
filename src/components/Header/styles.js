import styled from "styled-components";


export const Container = styled.header`
    background: orange;
`;

export const Content = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 64px;

    img {
        margin: 10px;
        max-width: 64px;
    }

    nav {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.header``;

// export const Home = styled(Link)`
// 	display: flex;
// 	align-items: center;
// 	text-decoration: none;
// 	transition: opacity 0.2s;
// 	margin: 10px;

// 	&:hover {
// 		opacity: 0.7;
// 	}
// `;
