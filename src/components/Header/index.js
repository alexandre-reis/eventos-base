import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/upf50.png";
import { Container, Content, Profile } from "./styles";

function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Upf eventos" />
                    <Link to="/participantes">Participantes</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <Link to="/app">
                                <FaHome size={36} color="#14161a" />
                            </Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default withRouter(Header);
