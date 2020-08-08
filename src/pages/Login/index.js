import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/upf50.png";

import api from "../../services/api";
import { login } from "../../services/auth";

class Login extends Component {
    state = {
        username: "",
        password: "",
        error: "",
    };

    handleSignUp = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({
                error: "Preencha documento e senha para continuar",
            });
        } else {
            try {
                const response = await api.get("/sessions");
                console.log(response);
                login(response);
                this.props.history.push("/app");
            } catch (err) {
                console.log(err);
                this.setState({
                    error: "Ocorreu um erro ao acessar sua conta.",
                });
            }
        }
    };

    render() {
        return (
            <>
                <img src={Logo} alt="Universidade de Passo Fundo" />
                <form onSubmit={this.handleSignUp}>
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
                    <Link to="/forgot">Esqueceu sua senha?</Link>
                </form>
            </>
        );
    }
}

export default withRouter(Login);
