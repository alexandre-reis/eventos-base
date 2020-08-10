import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Content from "../../../components/Content";
import { Wrapper } from "./styles";


export default function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Wrapper>
                <Sidebar />
                <Content>
                    {children}
                </Content>
                {/* footer */}
            </Wrapper>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
