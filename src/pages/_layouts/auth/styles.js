import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        p {
            color: #ff3333;
            margin-bottom: 15px;
            border: 1px solid #ff3333;
            padding: 10px;
            width: 100%;
            text-align: center;
        }

        input {
            border-radius: 4px;
            border: 1px solid red;
            height: 44px;
            margin-bottom: 15px;
            padding: 0 20px;
            color: #777;
            font-size: 15px;
            width: 100%;
            border: 1px solid #ddd;
            &::placeholder {
                color: #999;
            }
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;

            &:hover {
                background: ${darken(0.03, "#3b9eff")};
            }
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

        a {
            font-size: 16;
            font-weight: bold;
            color: #999;
            text-decoration: none;
        }
    }
`;
