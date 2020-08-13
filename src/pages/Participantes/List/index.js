import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Table, TableBody,  TableCell, TableContainer, TableHead, TableRow,  Paper} from "@material-ui/core";

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

import { Container } from "./styles";

import { db } from "../../../services/firebase";

function ParticipantesList() {
    const [participantes, setParticipantes] = useState([]);

    useEffect(() => {
        const eventosRef = db.collection("participantes");
        eventosRef.get().then((eventos) => {
            eventos.forEach((doc) => {
                const participante = {
                    ...doc.data(),
                    uuid: doc.id
                };
                setParticipantes((participantes) => [
                    ...participantes,
                    participante,
                ]);
            });
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Participante</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>telefone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {participantes.map((participante) => (
                        <TableRow key={participante.uuid}>
                            <TableCell component="th" scope="row">
                                {participante.codigo}
                            </TableCell>
                            <TableCell>{participante.nome}</TableCell>
                            <TableCell>{participante.email}</TableCell>
                            <TableCell>{participante.telefone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        // <Container>
        //     <h2>Listagem participantes</h2>
        //     {participantes.map((product) => (
        //         <li key={product.uuid}>{product.nome}</li>
        // 	))}

        // </Container>
    );
}
export default ParticipantesList;
