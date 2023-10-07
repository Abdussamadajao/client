import React from "react";
import { TextBox, Wrapper } from "./style";

const Hero = () => {
  return (
    <Wrapper>
      <TextBox>
        <h1 className="header">
          <span>Lex Gateway</span>
          <span> Legal Practitioners</span>
        </h1>
        <p>
          Lex Gateway Legal Practitioners (Lex Gateway LP) is a law firm
          established with the purpose of providing quality and highly
          professional legal services to clients in Nigeria and abroad.
        </p>
      </TextBox>
    </Wrapper>
  );
};

export default Hero;
