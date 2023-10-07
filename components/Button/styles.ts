import styled, { css } from "styled-components";
import { deviceSizes } from "../../styles/themes";

export type ButtonProps = {
  type: string;
};

const styles = (key: string) => {
  return key === "primary"
    ? css`
        background: ${({ theme }) => theme.colors.Blue};
        color: ${({ theme }) => theme.colors.White};
        border: 1px solid ${({ theme }) => theme.colors.Blue};

        &:hover {
          color: ${({ theme }) => theme.colors.White};
        }

        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.Blue1};
          border: 1px solid ${({ theme }) => theme.colors.Blue1};
        }

        &:disabled {
          background: ${({ theme }) => theme.colors.gray2};
          border: 1px solid ${({ theme }) => theme.colors.gray2};
        }
      `
    : key === "secondary"
    ? css`
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.Black2};

        &:hover {
          background: ${({ theme }) => theme.colors.Black2};
          color: ${({ theme }) => theme.colors.White};
        }

        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.Black2};
          border: 1px solid ${({ theme }) => theme.colors.Black2};
        }

        &:disabled {
          background: ${({ theme }) => theme.colors.Black2};
          border: 1px solid ${({ theme }) => theme.colors.Black2};
        }
      `
    : key === "tertiary"
    ? css`
        background: transparent;
        border: none;
        position: relative;
        padding-left: 0;
        min-width: fit-content;
        box-shadow: none;

        &:hover {
          color: ${({ theme }) => theme.colors.Black};

          &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: black;
          }
        }
      `
    : key === "white"
    ? css`
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.White};
        color: ${({ theme }) => theme.colors.White};
        &:hover {
          background: ${({ theme }) => theme.colors.Black2};
          color: ${({ theme }) => theme.colors.White};
        }

        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.Black2};
          border: 1px solid ${({ theme }) => theme.colors.Black2};
        }

        &:disabled {
          background: ${({ theme }) => theme.colors.Black2};
          border: 1px solid ${({ theme }) => theme.colors.Black2};
        }
      `
    : null;
};

const ButtonWrapper = styled.div<ButtonProps>`
  display: inline-block;

  button.ant-btn {
    height: 50px;
    border-radius: 2px;
    text-align: center;
    transition: all 0.01s ease-in;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    min-width: 200px;

    @media ${deviceSizes.tablet} {
      font-size: 16px;
      height: 58px;
    }

    ${(props) => styles(props.type)};

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default ButtonWrapper;
