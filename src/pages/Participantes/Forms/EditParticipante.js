import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Error, Container } from "./styles";
import ErrorMessage from "../errorMessage";
import history from "../../../services/history";

import { db } from "../../../services/firebase";

function EditParticipante() {
    const [participante, setParticipante] = useState({});

    let { id } = useParams();

    const participanteRef = db.collection(`participantes`).doc(id);
    useEffect(() => {
        participanteRef.get().then((doc) => {
            if (doc.exists) {
                setParticipante(() => doc.data());
            }
        });
    }, []);

    const handleChange = e => {
        const {name, value} = e.target;
        setParticipante({...participante, [name]: value});
    }

    const onSubmit = (data) => {
        participanteRef.update(participante).then(() => {
            history.push("/participantes");
        });
    };
    const { register, handleSubmit, errors, control } = useForm();

    return (
        <Container>
            <h2>Editando: {participante.nome}</h2>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Row>
                    <label>Código:</label>
                    <input onChange={handleChange} value={participante.codigo} name="codigo" />
                    <ErrorMessage error={errors.codigo} />
                </Row>
                <Row>
                    <label>Nome:</label>
                    <input onChange={handleChange} value={participante.nome} name="nome" />
                    <ErrorMessage error={errors.nome} />
                </Row>
                <Row>
                    <label>Telefone:</label>
                    <input onChange={handleChange}
                        value={participante.telefone}
                        name="telefone"
                        maxLength="11"
                    />
                    <ErrorMessage error={errors.telefone} />
                </Row>
                <Row>
                    <label>CPF:</label>
                    <input onChange={handleChange}
                        value={participante.documento}
                        name="documento"
                        maxLength="11"
                    />
                    <ErrorMessage error={errors.documento} />
                </Row>
                <Row>
                    <label>Id estrangeiro:</label>
                    <input onChange={handleChange} value={participante.idEstrangeiro} name="idEstrangeiro" maxLength="11" />
                    <ErrorMessage error={errors.idEstrangeiro} />
                </Row>
                <Row>
                    <label>E-mail:</label>
                    <input onChange={handleChange}
                        value={participante.email}
                        name="email"
                        type="email"
                    />
                    <ErrorMessage error={errors.email} />
                </Row>
                <Row>
                    <label>Tipo:</label>
                    <select name="tipo" value={participante.tipo}>
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
export default EditParticipante;
