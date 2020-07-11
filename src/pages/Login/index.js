import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Container, ForgotPassword } from "./styles";

import Logo from "../../assets/upf50.png";

class Login extends Component {
	state = {
		username: "",
		email: "",
		password: "",
		error: "",
	};

	handleSignUp = (e) => {
		e.preventDefault();
		alert("Registro efetuado");
	};

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSignUp}>
					<img src={Logo} alt="Universidade de Passo Fundo" />
					{this.state.error && <p>{this.state.error}</p>}

					<input
						type="text"
						placeholder="Informe seu CPF/CNPJ"
						onChange={(e) =>
							this.setState({ username: e.target.value })
						}
					/>
					<input
						type="password"
						placeholder="Senha"
						onChange={(e) =>
							this.setState({ password: e.target.value })
						}
					/>
					<button type="submit">Entrar</button>
					<hr />
					<Link to="/">Esqueceu sua senha?</Link>
				</Form>
			</Container>
		);
	}
}

export default Login;
