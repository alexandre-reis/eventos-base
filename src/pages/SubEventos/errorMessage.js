import React from "react";
import { Error } from "./styles";

export default function ErrroMessage({ error }) {
    if (error) {

        switch (error.type) {
            case "required":
                return <Error>Campo obrigatório</Error>;
            default:
                return null;
        }
    }

    return null;
}
