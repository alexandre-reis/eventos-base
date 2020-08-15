import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  margin: 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    max-width: 600px;

    label {
      color: #777;
      flex: 0 0 25%;
    }

    input,
    select {
      border-radius: 4px;
      height: 35px;
      padding: 0 10px;
      color: #777;
      font-size: 15px;
      flex: 0 0 75%;
      border: 1px solid #ddd;
      &::placeholder {
        color: #777;
      }
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  align-items: center;
`;

export const Error = styled.p`
  color: #ff3333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  border-color: green !important;
  color: green !important;
  margin-left: 10px;
`;
