import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

import { Row, Container, ButtonContainer, SubmitButton } from "./styles";
import history from "../../../services/history";

import { db } from "../../../services/firebase";

function EditParticipante() {
  const [participante, setParticipante] = useState({});

  let { id } = useParams();

  const participanteRef = db.collection(`participantes`);

  useEffect(() => {
    participanteRef
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setParticipante(() => doc.data());
        }
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipante({ ...participante, [name]: value });
  };

  const onSubmit = (data) => {
    participante.nome = participante.nome.toUpperCase();
    participanteRef
      .doc(id)
      .update(participante)
      .then(() => {
        redirect();
      });
  };

  const redirect = () => {
    history.push("/participantes");
  };
  const { register, handleSubmit, errors, control } = useForm();

  return (
    <Container>
      <h2>Editando: {participante.nome}</h2>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row>
          <label>Código:</label>
          <input
            type="number"
            onChange={handleChange}
            value={participante.codigo}
            name="codigo"
            disabled
          />
        </Row>
        <Row>
          <label>Nome:</label>
          <input
            onChange={handleChange}
            value={participante.nome}
            name="nome"
          />
        </Row>
        <Row>
          <label>Telefone:</label>
          <input
            onChange={handleChange}
            value={participante.telefone}
            name="telefone"
            maxLength="11"
          />
        </Row>
        <Row>
          <label>CPF:</label>
          <input
            onChange={handleChange}
            value={participante.documento}
            name="documento"
            maxLength="11"
          />
        </Row>
        <Row>
          <label>Id estrangeiro:</label>
          <input
            onChange={handleChange}
            value={participante.idEstrangeiro}
            name="idEstrangeiro"
            maxLength="11"
          />
        </Row>
        <Row>
          <label>E-mail:</label>
          <input
            onChange={handleChange}
            value={participante.email}
            name="email"
            type="email"
          />
        </Row>
        <Row>
          <label>Tipo:</label>
          <select name="tipo" value={participante.tipo} onChange={handleChange}>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="funcionario">Funcionário</option>
            <option value="externo">Externo</option>
          </select>
        </Row>
        <hr />
        <ButtonContainer>
          <SubmitButton type="submit" variant="outlined">
            Salvar
          </SubmitButton>
          <Button type="button" onClick={() => redirect()}>
            cancelar
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
}
export default EditParticipante;
