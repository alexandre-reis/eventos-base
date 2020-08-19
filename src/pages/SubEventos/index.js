import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Button, 
    TextField, 
    InputLabel, 
    Select, 
    Input,
    MenuItem, 
    FormControl,
    Checkbox, 
    ListItem, 
    FormControlLabel,
    Grid,
} from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Row, Container, ButtonContainer, SubmitButton } from "./styles";

import ErrorMessage from "./errorMessage";

import { db } from "../../services/firebase";
import history from "../../services/history";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function SubEventos() {
    const classes = useStyles();
    const subeventoRef = db.collection(`Subeventos`);

    const onSubmit = (data) => {
        console.log(data);
        db.collection("Subeventos")
            .add(data)
            .then(function (subeventoRef) {
                history.push("/app");
            });
    };

    const { register, handleSubmit, errors } = useForm();

    const [checked, setChecked] = React.useState(true);

    const redirect = () => {
        history.push("/subeventos");
      };

    return (
        <Container>

            <h2>Cadastro de Subevento:</h2>

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
                <label>Descrição:</label>
                <input ref={register({ required: true })} name="descricao" />
                <ErrorMessage error={errors.descricao} />
            </Row>
            <Row>
                <label>Turno:</label>
                <select name="turno" ref={register}>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
                </select>
                <ErrorMessage error={errors.codigo} />
            </Row>
            <Row>
                <label>Data:</label>
                <TextField
                    id="date"
                    type="date"
                    name="data"
                    defaultValue={new Date()}
                    className={classes.textField}
                    ref={register}
                />
            </Row>
            <Row>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.controlaInicio}
                        name="controlaInicio"
                        color="primary"
                        ref={register}
                    />
                    }
                    label="Controlar Inicio"
                />
                <form className={classes.container} noValidate>
                    <TextField
                        id="horaInicio"
                        name="horaInicio"
                        label="Horario Inicial"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        ref={register}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                </form>
            </Row>
            <Row>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.controlaFinal}
                        name="controlaFinal"
                        color="primary"
                        ref={register}
                    />
                    }
                    label="Controlar Fim"
                />
                <form className={classes.container} noValidate>
                    <TextField
                        id="horaFim"
                        name="horaFim"
                        label="Horario Final"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                </form>
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

export default SubEventos;
