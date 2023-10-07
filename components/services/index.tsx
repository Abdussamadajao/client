import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordion from "./accordion";
import { data } from "./data";
import { Wrapper } from "./style";

const Service = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index: any) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Accordion key={index} item={item} />
      ))}
    </Wrapper>
  );
};

export default Service;
