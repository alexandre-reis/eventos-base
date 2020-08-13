import React from "react";

import { Container, InnerContainer } from "./styles";

function Content({ children }) {
    return (
        <Container>
            <InnerContainer>{children}</InnerContainer>
        </Container>
    );
}

export default Content;
