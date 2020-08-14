import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import history from '../../../services/history';

import { db } from "../../../services/firebase";

function ParticipantesList() {
    const [participantes, setParticipantes] = useState([]);

    const handleEdit = (idParticipante) => {
        history.push(`/participantes/${idParticipante}`);
    }

    useEffect(() => {
        const eventosRef = db.collection("participantes");
        eventosRef.get().then((eventos) => {
            eventos.forEach((doc) => {
                const participante = {
                    ...doc.data(),
                    uuid: doc.id,
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
                        <TableCell>firebase codigo</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>telefone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {participantes.map((participante) => (
                        <TableRow key={participante.uuid}>
                            <TableCell component="th" scope="row">
                                {participante.codigo}
                            </TableCell>
                            <TableCell>{participante.uuid}</TableCell>
                            <TableCell>{participante.nome}</TableCell>
                            <TableCell>{participante.email}</TableCell>
                            <TableCell>{participante.telefone}</TableCell>
                            <TableCell>
                                <IconButton aria-label="edit" size="small" onClick={() => handleEdit(participante.uuid)}>
                                    <EditIcon fontSize="inherit" />
                                </IconButton>

                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </TableCell>
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
