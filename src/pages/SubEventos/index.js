import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import {
    Button,
    TextField,
    InputLabel,
    Select,
    Input,
    MenuItem,
    FormControl,
} from "@material-ui/core";
import { FixedSizeList } from "react-window";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { Container, Row, Error } from "./styles";
import ErrorMessage from "./errorMessage";

import { db } from "../../services/firebase";
import history from "../../services/history";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";

function SubEventos() {
    const onSubmit = (data) => {
        console.log(data);
        db.collection("subeventos")
            .add(data)
            .then(function (docRef) {
                history.push("/app");
            });
    };

    const [selectedDate, handleDateChange] = useState(new Date());

    const { register, handleSubmit, errors } = useForm();

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300,
        },
        chips: {
            display: "flex",
            flexWrap: "wrap",
        },
        chip: {
            margin: 2,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
    }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = ["Evento 1", "Evento 2", "Evento 3", "Evento 4", "Evento 5"];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <TextField
                        inputRef={register}
                        name="descricao"
                        id="outlined-basic"
                        label="Descrição"
                        variant="outlined"
                        fullWidth
                    />
                    <ErrorMessage error={errors.descricao} />
                </Row>
                <Row>
                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="demo-mutiple-name-label">
                            Evento Principal
                        </InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            multiple
                            fullWidth
                            value={personName}
                            onChange={handleChange}
                            nput={<Input />}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Row>
                <Row>
                    <FormControl className={classes.formControl}>
                        <TextField
                            inputRef={register}
                            id="date"
                            name="dataInicial"
                            label="Inicio"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            inputRef={register}
                            id="date"
                            name="dataFinal"
                            label="Fim"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                </Row>
                <hr />
                <Row>
                    <Button type="submit" variant="outlined">
                        Salvar
                    </Button>
                    <Button type="cancel" variant="outlined">
                        Sair
                    </Button>
                </Row>
            </form>
        </Container>
    );
}

export default SubEventos;
