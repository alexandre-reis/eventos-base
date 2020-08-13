import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

import { Container, Row, Error } from "./styles";
import ErrorMessage from "./errorMessage";

import { db } from "../../services/firebase";

function Participantes() {
    const onSubmit = (data) => {
        if (!data.idEstrangeiro && !data.documento) {
            return alert("Informe o cpf ou id do estrangeiro");
        }

        db.collection("participantes")
            .add(data)
            .then(function (docRef) {
                console.log("salvou", docRef);
            });
    };
    const { register, handleSubmit, errors } = useForm();

    return (
        <Container>
            <h2>Cadastro de participantes:</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <label>Código:</label>
                    <input ref={register({ required: true })} name="codigo" />
                    <ErrorMessage error={errors.codigo} />
                </Row>
                <Row>
                    <label>Nome:</label>
                    <input ref={register({ required: true })} name="nome" />
                    <ErrorMessage error={errors.nome} />
                </Row>
                <Row>
                    <label>Telefone:</label>
                    <input
                        ref={register({ required: true })}
                        name="telefone"
                        maxLength="11"
                    />
                    <ErrorMessage error={errors.telefone} />
                </Row>
                <Row>
                    <label>CPF:</label>
                    <input
                        ref={register({ maxLength: 11 })}
                        name="documento"
                        maxLength="11"
                    />
                    <ErrorMessage error={errors.documento} />
                </Row>
                <Row>
                    <label>Id estrangeiro:</label>
                    <input ref={register} name="idEstrangeiro" maxLength="11" />
                    <ErrorMessage error={errors.idEstrangeiro} />
                </Row>
                <Row>
                    <label>E-mail:</label>
                    <input
                        ref={register({ required: true })}
                        name="email"
                        type="email"
                    />
                    <ErrorMessage error={errors.email} />
                </Row>
                <Row>
                    <label>Tipo:</label>
                    <select name="tipo" ref={register}>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="funcionario">Funcionário</option>
                        <option value="externo">Externo</option>
                    </select>
                    <ErrorMessage error={errors.codigo} />
                </Row>
                <hr />
                <Button type="submit" variant="outlined">
                    Salvar
                </Button>
            </form>
        </Container>
    );
}
export default Participantes;
