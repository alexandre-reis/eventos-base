import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/upf50.png";
import { Container, Home } from "./styles";



function Header() {
	return (
		<Container>
			<Link to="/app">
				<img src={logo} alt="Upf eventos" />
			</Link>

			<Home to="/app">
				<span>
					<FaHome size={36} color="#14161a"/>
				</span>
			</Home>
		</Container>
	);
}

export default withRouter(Header);
