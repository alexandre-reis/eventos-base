import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Error, Container } from "./styles";
import ErrorMessage from "./errorMessage";
import history from '../../services/history'

import { db } from "../../services/firebase";


function Participantes() {

    const onSubmit = (data) => {
        if (!data.idEstrangeiro && !data.documento) {
            return alert("Informe o cpf ou id do estrangeiro");
        }

        data.nome = data.nome.toUpperCase();

        db.collection("participantes")
            .add(data)
            .then(function (docRef) {
                history.push('/participantes');
            });
    };
    const { register, handleSubmit, errors, control } = useForm();

    return (
        <Container>
            <h2>Cadastro de participantes:</h2>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Row>
                    {/* <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register({ required: true })}
                        required
                        fullWidth
                        id="codigo"
                        label="Código"
                        name="codigo"
                        autoFocus
                    /> */}
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

        // <Container component="main" maxWidth="xs">
        //     <div className={classes.paper}>
        //         <Typography component="h1" variant="h5">
        //             Cadastro de participantes
        //         </Typography>
        //         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        //             <TextField
        //                 variant="outlined"
        //                 margin="normal"
        //                 inputRef={register({ required: true })}
        //                 required
        //                 fullWidth
        //                 id="codigo"
        //                 label="Código"
        //                 name="codigo"
        //                 autoFocus
        //             />
        //             <TextField
        //                 variant="outlined"
        //                 margin="normal"
        //                 inputRef={register}
        //                 required
        //                 fullWidth
        //                 name="password"
        //                 label="Password"
        //                 type="password"
        //                 id="password"
        //                 autoComplete="current-password"
        //             />
        //             <FormControlLabel
        //                 control={
        //                     <Controller
        //                         as={Checkbox}
        //                         control={control}
        //                         name="remember"
        //                         color="primary"
        //                         defaultValue={false}
        //                     />
        //                 }
        //                 label="Remember me"
        //             />
        //             <Button
        //                 type="submit"
        //                 fullWidth
        //                 variant="contained"
        //                 color="primary"
        //                 className={classes.submit}
        //             >
        //                 Sign In
        //             </Button>
        //             <Grid container>
        //                 <Grid item xs>
        //                     <Link href="#" variant="body2">
        //                         Forgot password?
        //                     </Link>
        //                 </Grid>
        //                 <Grid item>
        //                     <Link href="#" variant="body2">
        //                         {"Don't have an account? Sign Up"}
        //                     </Link>
        //                 </Grid>
        //             </Grid>
        //         </form>
        //     </div>
        // </Container>
    );
}
export default Participantes;
