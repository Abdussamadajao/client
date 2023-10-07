import React from "react";
import { Button as AntdButton } from "antd";
import ButtonWrapper from "./styles";

const Button = ({ type, children, className, ...rest }: any) => {
  return (
    <ButtonWrapper type={type} className={className}>
      <AntdButton {...rest}>{children}</AntdButton>
    </ButtonWrapper>
  );
};

export default Button;
