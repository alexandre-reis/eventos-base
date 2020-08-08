import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin:50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        label {
            color: #777;
            padding-bottom: 60px;
        }

        input, select {
            border-radius: 4px;
            height: 35px;
            padding: 0 20px;
            color: #777;
            font-size: 15px;
            width: 100%;
            border: 1px solid #ddd;
            &::placeholder {
                color: #777;
            }
        }

        button {
            align-self: flex-end;
            border-color: green;
            color: green;
        }

        h2 {
            margin: 10px 0 20px;
        }

        hr {
            margin: 20px 0;
            border: none;
            border-bottom: 1px solid #cdcdcd;
            width: 100%;
        }

    }
`;

export const Row = styled.div`
    margin-bottom: 15px;
`;

export const Error = styled.p`
    color: #ff3333;
`;

