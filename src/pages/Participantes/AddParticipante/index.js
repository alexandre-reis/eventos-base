import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { Row, Container, ButtonContainer, SubmitButton } from "./styles";
import ErrorMessage from "./errorMessage";
import history from "../../../services/history";

import { db } from "../../../services/firebase";

function AddParticipante() {
  const participanteRef = db.collection(`participantes`);

  const onSubmit = async (data) => {
    if (!data.idEstrangeiro && !data.documento) {
      return alert("Informe o cpf ou id do estrangeiro");
    }

    const documento = await findByDoc(data.codigo, data.documento);
    const idEstrangeiro = await findByIdEstrangeiro(
      data.codigo,
      data.documento
    );

    if (documento > 0 || idEstrangeiro > 0) {
      return alert("registro ja cadastrado");
    }

    data.nome = data.nome.toUpperCase();

    participanteRef.add(data).then(function (docRef) {
      redirect();
    });
  };

  const findByDoc = async (codigo, documento) => {
    return participanteRef
      .where("codigo", "==", codigo)
      .where("documento", "==", documento)
      .get()
      .then((snapshot) => {
        return snapshot.size;
      });
  };

  const findByIdEstrangeiro = async (codigo, idEstrangeiro) => {
    return participanteRef
      .where("codigo", "==", codigo)
      .where("idEstrangeiro", "==", idEstrangeiro)
      .get()
      .then((snapshot) => {
        return snapshot.size;
      });
  };

  const redirect = () => {
    history.push("/participantes");
  };

  const { register, handleSubmit, errors, control } = useForm();

  return (
    <Container>
      <h2>Cadastro de participantes:</h2>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row>
          <label>Código:</label>
          <input
            ref={register({ required: true })}
            name="codigo"
            type="number"
          />
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
          <input ref={register({ required: true })} name="email" type="email" />
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
export default AddParticipante;
